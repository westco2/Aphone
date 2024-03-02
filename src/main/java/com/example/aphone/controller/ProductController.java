package com.example.aphone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/product")
public class ProductController {
    @GetMapping("/bid")
    public String bid () {
        return "product/bid";
    }
    @GetMapping("/bid2")
    public String bid2 () {
        return "product/bid2";
    }
    @GetMapping("/check")
    public String check(){
        return "product/check";
    }
    @GetMapping("/product")
    public String product(){
        return "product/product";
    }
    @GetMapping("/settle")
    public String settle(){
        return "product/settle";

    }
    @GetMapping("/settle2")
    public String settle2(){
        return "product/settle2";
    }
    @GetMapping("/settle_sell")
    public String settle_sell(){
        return "product/settle_sell";
    }

}
