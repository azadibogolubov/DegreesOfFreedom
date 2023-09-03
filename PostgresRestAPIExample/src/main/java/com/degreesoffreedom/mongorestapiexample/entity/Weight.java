package com.degreesoffreedom.mongorestapiexample.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "weights")
public class Weight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public int sets;
    private int reps;
    private int weight;
    private String name;
    private Date date;
}
