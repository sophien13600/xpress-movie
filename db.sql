DROP DATABASE IF EXISTS xpress-movie;

CREATE DATABASE xpress-movie;

CREATE TABLE users
(
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255),
    password VARCHAR(100),
    role VARCHAR(75),
);
CREATE TABLE films
(

    id INT PRIMARY KEY NOT NULL,
    titre VARCHAR(100),
    image VARCHAR(255),
    description VARCHAR(255),
    dateSortie DATETIME,
    genre VARCHAR(75),
);