require('dotenv').config();
const express = require('express');
const { PubSub } = require('@google-cloud/pubsub');
const cors=require('cors')
const corsConfig = require("./corsOption")
const app = express();
const pubsub = new PubSub();
const topicName = process.env.TOPIC_NAME;

app.use(express.json());
app.use(cors(corsConfig));

app.get("/", async (req, res) => {
  res.status(200).json({ 'message': 'Server Online' });
})

app.post('/publish', async (req, res) => {
  const { message } = req.body;

  try {
    const topic = pubsub.topic(topicName);
    const dataBuffer = Buffer.from(message);
    await topic.publishMessage({ data: dataBuffer });

    console.log('Message published : '+message);
    res.status(200).json({ 
      'message': 'Message published',
      'success':true
     });
  } catch (error) {
    console.error('Error publishing message:', error);
    res.status(500).json({ 'message': 'Error publishing message' ,'success':false});
  }
});

const PORT = process.env.SVR_PORT || 3000;
app.listen(PORT, () => {
  console.log(`order service listening to ${topicName} on port : ${PORT}`);
});
