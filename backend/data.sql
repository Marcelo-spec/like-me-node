CREATE DATABASE likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),descripcion VARCHAR(255), likes INT);

INSERT INTO "posts" ("titulo", "img", "descripcion", "likes") VALUES
('Titulo', 'https://www.mathogames.cl/3952-medium_default/the-legend-of-zelda-tears-of-the-kingdom.jpg', 'asd', 6),


