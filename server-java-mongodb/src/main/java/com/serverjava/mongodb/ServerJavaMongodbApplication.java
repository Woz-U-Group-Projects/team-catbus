package com.serverjava.mongodb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerJavaMongodbApplication implements CommandLineRunner{
	
	@Autowired
	private GameRepository  gameRepository;

	public static void main(String[] args) {
		SpringApplication.run(ServerJavaMongodbApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		Game c1 = new Game ("1","hello","how","why","where","here","wow");
		
		gameRepository.save(c1);
		
		System.out.println("*****************");
		
		List<Game> games = gameRepository.findAll();
		
		for (Game c : games) {
			System.out.println(c.toString());
		}
		
	}

}
