const {kafka} = require('./client')

async function init(){
    const producer = kafka.producer()
    console.log('Connecting Producer');
    await producer.connect()
    console.log('Producer Connected Successfully')

    await producer.send({
        topic:'rider-update',
        messages:[
            {   partition:0,
                key:'location-update', 
                value:JSON.stringify({name:'Tony Stark',loc:'South'})
            }
        ]
    })

    await producer.disconnect()
}

init()
