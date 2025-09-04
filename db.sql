DROP DATABASE IF EXISTS xpress-movie;

CREATE DATABASE xpress-movie;

use x-press-movie

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

INSERT INTO films (titre, image, description, date_sortie, genre) VALUES
  ('Inception', '/images/inception.jpg', 'Un voleur infiltre les rêves pour dérober des secrets.', '2010-07-16 00:00:00', 'Science-Fiction'),
  ('The Dark Knight', '/images/dark-knight.jpg', 'Batman affronte le Joker à Gotham.', '2008-07-18 00:00:00', 'Action'),
  ('Interstellar', '/images/interstellar.jpg', 'Exploration spatiale à travers un trou de ver pour sauver l’humanité.', '2014-11-07 00:00:00', 'Science-Fiction');
