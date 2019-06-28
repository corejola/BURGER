-- Base schema for Eat-Da-Burger

CREATE DATABASE burgers_db;
USE burgers_db;

-- Used Sequelize CLI to create schema - see "../models"
CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	burger_name varchar
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);
