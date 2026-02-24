/*

1. What is kafka
2. What is topic
3. What is partition
4. What is groups
5. What is producer
6. What is consumer

7. What is zookeeper
8. Kafka replication
9. Expalin this
        docker run -d --name kafka \
        -p 9092:9092 \
        -e KAFKA_NODE_ID=1 \
        -e KAFKA_PROCESS_ROLES=broker,controller \
        -e KAFKA_CONTROLLER_QUORUM_VOTERS=1@localhost:9093 \
        -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092,CONTROLLER://0.0.0.0:9093 \
        -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
        -e KAFKA_CONTROLLER_LISTENER_NAMES=CONTROLLER \
        -e KAFKA_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT \
        -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
        confluentinc/cp-kafka:latest


*/