const { kafka } = require('./client')

async function init(){
    const admin = kafka.admin();
    console.log("Admin Connection");
    admin.connect();
    console.log("Admin Connection Success...");
    
    
    console.log("Creating Topics [rider-updates]");
    await admin.createTopics({
        topics:[
            {
                topic:'rider-updates',
                numPartitions:2
            }
        ]
    })
    console.log("Topic created success.....");
    console.log("Disconnecting admin..");
    await admin.disconnect();
}

init()