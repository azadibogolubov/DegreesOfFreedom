package com.degreesoffreedom.mongorestapiexample.repository;

import com.degreesoffreedom.mongorestapiexample.entity.Weight;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WeightRepository extends MongoRepository<Weight, String> { }
