package com.example.aphone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {
    @GetMapping("/iphone")
    public String iphone(){
        return "main/iphone";
    }
    @GetMapping("/store")
    public String store(){
        return "main/store";
    }
    @GetMapping("/info")
    public String info(){
        return "main/info";
    }
}
