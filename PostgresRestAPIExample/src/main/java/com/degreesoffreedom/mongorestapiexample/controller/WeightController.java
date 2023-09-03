package com.degreesoffreedom.mongorestapiexample.controller;

import com.degreesoffreedom.mongorestapiexample.entity.Weight;
import com.degreesoffreedom.mongorestapiexample.service.WeightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class WeightController {
    @Autowired
    private WeightService weightService;

    @GetMapping(value = "/weight", produces = "application/json")
    public ResponseEntity<String> getWeights() {
        return new ResponseEntity<>(weightService.getWeights(), HttpStatus.OK);
    }

    @GetMapping(value = "/weight/{id}", produces = "application/json")
    public ResponseEntity<String> getWeight(@PathVariable String id) {
        return new ResponseEntity<>(weightService.getWeight(id), HttpStatus.OK);
    }

    @PostMapping(value = "/weight", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> addWeight(@RequestBody Weight weight) {
        return new ResponseEntity<>(weightService.addWeight(weight), HttpStatus.OK);
    }

    @DeleteMapping(value = "/weight")
    public ResponseEntity<String> deleteWeights() {
        return new ResponseEntity<>(weightService.deleteWeights(), HttpStatus.OK);
    }
}
