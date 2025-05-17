-- crear_base.sql
DROP TABLE IF EXISTS peliculas;

CREATE TABLE peliculas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    director TEXT NOT NULL,
    anio INTEGER NOT NULL
);

INSERT INTO peliculas (titulo, director, anio) VALUES
('Matrix', 'Lana Wachowski', 1999),
('Inception', 'Christopher Nolan', 2010),
('Interstellar', 'Christopher Nolan', 2014);
