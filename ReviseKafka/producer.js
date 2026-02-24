import { kafkaClient } from "./client.js";

import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const initProducer = async () =>{
    try {
        
        const producer = kafkaClient.producer()
        console.log("Connecting producer");

        await producer.connect()
        console.log("Producer connected successfully");

        rl.setPrompt(">")
        rl.prompt()

        rl.on("line", async (line) =>{
            const [orderName, loc, orderPrice] = line && line.split(" ")

            await producer.send({
                topic:"order-updates",
                messages:[{
                    partition:loc.toLowerCase() ==="n" ? 0 : 1,
                    key:"order",
                    value:JSON.stringify({orderName,loc, orderPrice})
                }]
            })

        })
        .on('close', async () =>{
            await producer.disconnect()
        })
        

    } catch (error) {
        console.log("Somehting went wrong: ",error)
    }
}

initProducer()