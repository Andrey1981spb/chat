package ru.spb.chat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@Controller
public class RootController {

    @RequestMapping ("/")
    public String root() {
        return "login";
    }

    @RequestMapping(path = "/joinChart", method = RequestMethod.GET)
    public String joinChart(@RequestParam (defaultValue = "") String username) {
        return "redirect:/chat?username=" + username;
    }

    @RequestMapping ("/chat")
    public String chat() {
        return "chat";
    }

    @RequestMapping(path = "/logout")
    public String logout(HttpServletRequest request) {
        request.getSession(true).invalidate();

        return "redirect:/login";
    }

}
