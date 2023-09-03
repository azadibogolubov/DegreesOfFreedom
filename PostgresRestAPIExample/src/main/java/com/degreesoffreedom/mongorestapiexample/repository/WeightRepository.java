package com.degreesoffreedom.mongorestapiexample.repository;

import com.degreesoffreedom.mongorestapiexample.entity.Weight;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WeightRepository extends CrudRepository<Weight, String> {
    List<Weight> findAll();
}
