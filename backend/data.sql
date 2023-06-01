CREATE DATABASE likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),descripcion VARCHAR(255), likes INT);

INSERT INTO "posts" ("titulo", "img", "descripcion", "likes") VALUES
('Titulo', 'https://images.pexels.com/photos/60027/eiffel-tower-paris-france-tower-60027.jpeg', 'asd', 6),


