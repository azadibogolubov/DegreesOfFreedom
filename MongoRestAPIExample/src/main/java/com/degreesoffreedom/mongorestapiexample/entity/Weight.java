package com.degreesoffreedom.mongorestapiexample.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "weightschemas")
public class Weight {
    public String id;
    public int sets;
    private int reps;
    private int weight;
    private String name;
    private Date date;
}
