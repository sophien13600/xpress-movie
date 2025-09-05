DROP DATABASE IF EXISTS xpress_movie;

CREATE DATABASE xpress_movie;

use xpress_movie;

CREATE TABLE users
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(75) NOT NULL
);
CREATE TABLE films
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(100) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    dateSortie DATETIME NOT NULL,
    genre VARCHAR(75) NOT NULL
);

CREATE TABLE favoris
(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    dateAjout DATETIME NOT NULL,
    id_user INT,
    id_film INT,
    CONSTRAINT fk_users_id FOREIGN KEY  (id_user) REFERENCES users(id),
    CONSTRAINT fk_films_id FOREIGN KEY (id_film) REFERENCES films(id)
);

INSERT INTO films (titre, image, description, dateSortie, genre) VALUES
  ('Inception', '/images/inception.jpg', 'Un voleur infiltre les rêves pour dérober des secrets.', '2010-07-16 00:00:00', 'Science-Fiction'),
  ('The Dark Knight', '/images/dark-knight.jpg', 'Batman affronte le Joker à Gotham.', '2008-07-18 00:00:00', 'Action'),
  ('Interstellar', '/images/interstellar.jpg', 'Exploration spatiale à travers un trou de ver pour sauver l’humanité.', '2014-11-07 00:00:00', 'Science-Fiction');
