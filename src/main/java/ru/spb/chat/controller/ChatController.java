package ru.spb.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import ru.spb.chat.model.Message;

@Controller
public class ChatController {

    @MessageMapping ("/message")
    @SendTo ("/topic/message")
    public Message sendMessage(Message chatMessage) {
        System.out.println("chatMessage is " + chatMessage.toString());
        return chatMessage;
    }
}
