CREATE TABLE movies (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title varchar(40) NOT NULL,
type varchar(40) NOT NULL,
genere varchar(40)
);

CREATE TABLE users (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username varchar(80) NOT NULL UNIQUE,
    password_Hash varchar(80) NOT NULL

    );

INSERT INTO movies
(title,type,genere)
VALUES
 ('Marriage Story','movie ','Comedy, Drama, Romance'),
  ('Little Women','movie','Drama, Family, Romance'),
  ('Parasite','movie ','Comedy, Drama, Thriller');



  SELECT * FROM movies;
