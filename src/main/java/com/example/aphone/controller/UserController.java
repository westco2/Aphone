package com.example.aphone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
    @GetMapping("/account")
    public String account(){
        return "user/account";
    }
    @GetMapping("/attention")
    public String attention(){
        return "user/attention";
    }
    @GetMapping("/join")
    public String join(){
        return "user/join";
    }
    @GetMapping("/login")
    public String login(){
        return "user/login";
    }
    @GetMapping("/order")
    public String order(){
        return "user/order";
    }

}
