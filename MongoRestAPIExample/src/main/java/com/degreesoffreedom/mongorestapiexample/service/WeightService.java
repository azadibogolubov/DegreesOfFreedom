package com.degreesoffreedom.mongorestapiexample.service;

import com.degreesoffreedom.mongorestapiexample.entity.Weight;
import com.degreesoffreedom.mongorestapiexample.repository.WeightRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class WeightService {
    @Autowired
    private WeightRepository weightRepository;

    public String getWeight(String id) {
        Weight w = weightRepository.findById(id).orElse(new Weight());
        JSONObject returnObj = new JSONObject();
        returnObj.put("id", w.getId());
        returnObj.put("weight", w.getWeight());
        returnObj.put("sets", w.getSets());
        returnObj.put("name", w.getName());
        returnObj.put("date", w.getDate());
        return returnObj.toString();
    }

    public String getWeights() {
        List<Weight> allWeights = weightRepository.findAll();
        JSONArray returnArr = new JSONArray();
        for (Weight w : allWeights) {
            JSONObject weightObj = new JSONObject();
            weightObj.put("id", w.getId());
            weightObj.put("weight", w.getWeight());
            weightObj.put("sets", w.getSets());
            weightObj.put("name", w.getName());
            weightObj.put("date", w.getDate());
            returnArr.put(weightObj);
        }
        return returnArr.toString();
    }

    public String addWeight(Weight weight) {
        weight.setDate(new Date());
        weightRepository.save(weight);
        return "Successfully added record";
    }

    public String deleteWeights() {
        weightRepository.deleteAll();
        return "All entries deleted";
    }
}
