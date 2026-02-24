import { kafkaClient } from "./client.js";

const group = process.argv[2]
console.log(process.argv);


const initConsumer = async () =>{

    const consumer = kafkaClient.consumer({groupId:group})

    await consumer.connect()

    await consumer.subscribe({topic:'order-updates',fromBeginning:true})

    await consumer.run({
        eachMessage:({topic, partition, message, heartbeat, pause}) =>{
            console.log(`group: ${group}, topic: ${topic}, partition: ${partition}, message: ${message.value.toString()}`);
        }
    })

}


initConsumer()