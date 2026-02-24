import { kafkaClient } from "./client.js";

const initAdmin = async () =>{
    const admin = kafkaClient.admin()
    
    console.log("connecting admin")
    await admin.connect()
    console.log("admin connected.....")
    
    console.log("creating topic.....")

    await admin.createTopics({
        topics:[
            {
                topic:"order-updates",
                numPartitions:2
            }
        ]
    })

    console.log("Topic created");
     

    await admin.disconnect()


}

initAdmin()