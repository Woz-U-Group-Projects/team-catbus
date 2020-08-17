package com.serverjava.mongodb;

import org.springframework.data.annotation.Id;

public class Game {
	
	@Id
	public String id;
	public String title;
	public String releaseDate;
	public String location;
	public String developers;
	public String platoforms;
	public String similarGames;
	
	public Game() {
		
	}
	public Game(String id, String title, String releaseDate, String location, String developers, String platoforms,
			String similarGames) {
		super();
		this.id = id;
		this.title = title;
		this.releaseDate = releaseDate;
		this.location = location;
		this.developers = developers;
		this.platoforms = platoforms;
		this.similarGames = similarGames;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDevelopers() {
		return developers;
	}
	public void setDevelopers(String developers) {
		this.developers = developers;
	}
	public String getPlatoforms() {
		return platoforms;
	}
	public void setPlatoforms(String platoforms) {
		this.platoforms = platoforms;
	}
	public String getSimilarGames() {
		return similarGames;
	}
	public void setSimilarGames(String similarGames) {
		this.similarGames = similarGames;
	}
	@Override
	public String toString() {
		return "Game [id=" + id + ", title=" + title + ", releaseDate=" + releaseDate + ", location=" + location
				+ ", developers=" + developers + ", platoforms=" + platoforms + ", similarGames=" + similarGames + "]";
	}
	

}
