/**

1. What is Kafka?
-->
    a. Kafka is a distributed streaming platform developed by apache. Think of it as a high performance messaging system where data is collected, stored, and processed in real time.
    b. Key Concepts:
            1.Producer: An application that sends messages (data) to Kafka.
            2.Consumer: An application that reads messages from Kafka.
            3.Broker: A Kafka server that stores data and serves it to consumers.
            4.Topic: A category or feed name to which messages are sent. Think of it as a channel where data is posted.
            5.Partition: A topic can be divided into multiple parts, each part is called a partition. This allows Kafka to 6.scale horizontally.
            7.Offset: A unique identifier for each message within a partition, helping to keep track of which messages have been consumed.
    c. Simple Explanation:
            Imagine Kafka as a giant library:

            --> Producers are like authors who write books (messages) and place them on specific shelves (topics).
            --> Consumers are like readers who come to the library to read books (messages) from those shelves (topics).
            --> The library has multiple sections (partitions) for each type of book (topic), allowing multiple readers to read different parts of the collection at the same time.
    d. Zomato Example:
        Problem:
            1. Zomato take the location of driver and updated to the customer to track the live location. Suppose there is a database which take drivers location every 1 sec and insert it into database. 
            2. In india there are thousands of zomato drivers are there, to keep the data of every driver in every second then our database will be crash within a minute because database throughput is low.
            3.Throughput means operation per second. So, there are 1000 of driver are there in zomato, then executing 1000 insert per second then database will be crash within an hour.
        Solution:
            1. Solution is kafka because it has high throughput but kafka storage is temporary. Database has low throughput but we can store billions of data.
            2. We can't use query in kafka but we have to store our data into database. So, we have to use both kafka and database because kafka have high throughput but have temporary storage and database has low througput but it can store billions of data.

     e. Architecture of kafka:
            1. Example of ola:
                a. Assume 100000 ola is running and they are producing the data of speed, location, etc. because we need to perform multiple operation on the data.
                b. so assume we have a postgresql database, we can directly store data into database due the throuhput problem of database and we can use kafka between the ola driver and the database.
                c. First, data will pass to the kafka and it will store the data. Kafka has temporary storage so when kafka storage will be full. kafka will insert bulk data to the database because we need to persist the data.
                d. Consumer will take the data like fare, analytics and customer and perform some operation and then bulk upload to the database.
            2. Kafka internal work:
                a. kafka can have multiple topics and topics can have multiple partitions aacording to the need of application
                b. partitions can have index numbers like array.
                c. Suppose we have four partitions in a topic  and have one consumer so the consumer will consume the data from all the four partition. It work like auto balancing for example if we have four partitions and two consumer then on cosumer take the data from two partition and another from two partitions.
                d. suppose we have four partition and five consumers then each of the consumer consume data from on partions and fifth one will be idle.
                e. One consumer can consumer multiple partitions
                d. but one partions can consumer only one consumer.
            3. Consumer groups:
                a. In one group, one partitions can have multiple consumers
                b. kafka is a Queue and pub/sub model. 
     d. Code:
        1. First install docker and run zookeeper which is used to autobalancing according to the groups
            a. docker run -p 2181:2181 zookeeper
        2. Second run kafka and set environment variable
            a. run kafka : docker run -p 9092:9092 \ and then hit ctrl + enter and set the environment variable
            b.  docker run -p 9092:9092 `
                -e "KAFKA_ZOOKEEPER_CONNECT=192.168.1.14:2181" `
                -e "KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.14:9092" `
                -e "KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1" `
                confluentinc/cp-kafka


 */