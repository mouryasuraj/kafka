import { Kafka } from "kafkajs";

export const kafkaClient = new Kafka({
    clientId:'myapp',
    brokers:["localhost:9092"]
})