package com.degreesoffreedom.mongorestapiexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MongoRestApiExampleApplication {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/weight")
                        .allowedOrigins("http://localhost:3000");
            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(MongoRestApiExampleApplication.class, args);
    }

}
