package com.learn.pubsub.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/")
public class Api {
    @GetMapping()
    public Object getServerStatus() {
        Map<String,String> response = new HashMap<>();
        response.put("message", "online");
        return ResponseEntity.ok(response);
    }    
}
