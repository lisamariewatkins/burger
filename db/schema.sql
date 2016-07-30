#create burgers_db
CREATE DATABASE burgers_db;

#use burgers_db
USE 'burgers_db';

#create burgers table
CREATE TABLE burgers (
	'id' INT(11) AUTO_INCREMENT NOT NULL,
	'burger_name' VARCHAR(255) NOT NULL,
	'devoured' TINYINT(1) NOT NULL,
	'date' TIMESTAMP NOT NULL,
	PRIMARY KEY ('id');
