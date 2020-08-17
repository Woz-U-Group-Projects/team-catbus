package com.serverjava.mongodb;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository <Game,String>{

}
