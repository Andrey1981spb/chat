package ru.spb.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import ru.spb.chat.model.Message;

public class ChatController {

    @MessageMapping ("/message")
    @SendTo ("/chat/messages")
    public Message sendMessage(@Payload Message chatMessage) {
        return chatMessage;
    }

}
