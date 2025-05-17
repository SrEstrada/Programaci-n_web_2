-- crear_base.sql
CREATE TABLE peliculas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    anio INTEGER,
    director TEXT
);

INSERT INTO peliculas (titulo, anio, director) VALUES
('El Padrino', 1972, 'Francis Ford Coppola'),
('Pulp Fiction', 1994, 'Quentin Tarantino'),
('Inception', 2010, 'Christopher Nolan');