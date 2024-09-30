package com.learn.pubsub;

import org.springframework.stereotype.Component;

import com.google.cloud.pubsub.v1.AckReplyConsumer;
import com.google.cloud.pubsub.v1.MessageReceiver;
import com.google.pubsub.v1.PubsubMessage;

@Component
public class MsgReceiver implements MessageReceiver {
    @Override
    public void receiveMessage(PubsubMessage message , AckReplyConsumer consumer){
        System.out.println("Message Received : "+message.getData().toStringUtf8());
        consumer.ack();
    }
}
