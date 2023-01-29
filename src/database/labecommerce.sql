-- Active: 1674926831045@@127.0.0.1@3306
CREATE TABLE users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	email TEXT NOT NULL,
	password TEXT NOT NULL
);

SELECT * FROM users;
INSERT INTO users (id, email, password)
VALUES 
       (1, "jose@email.com", "jose123"),
       (2, "maria@email.com", "maria123"),
       (3, "joao@email.com", "joao123");

SELECT * FROM users; 

CREATE TABLE product (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	price REAL NOT NULL,
    category TEXT NOT NULL 
);

INSERT INTO product (id, name, price, category)
VALUES
(1, "cd-Metalica", 22.99, "MusicalStyle.ROCK"),
(2, "cd-Aviões", 19.90, "MusicalStyle.FORRO"),
(4, "cd-ArtBlakey", 59.90, "MusicalStyle.JAZZ"),
(5, "cd-Audio-Slave", 49.90, "MusicalStyle.ROCK"),
(6, "cd-Bartô-Galeno", 9.90, "MusicalStyle.FORRO");

/*Aprofundamento-SQL*/
SELECT * FROM users;
SELECT * FROM product;
SELECT * FROM product
WHERE name LIKE "%Metalica";


INSERT INTO users (id, email, password)
VALUES
(4, "Maju", "Maju123");
INSERT INTO product (id, name, price, category)
VALUES
(7, "cd-soft-Jazz", 59.90, "MusicalStyle.JAZZ");

SELECT * FROM users
ORDER BY id ASC;

SELECT id FROM users;

SELECT COUNT(*) as IDS,
	id
	FROM users
	GROUP BY id;

DELETE FROM users 
 WHERE id = 4;

DELETE FROM product 
 WHERE id = 4;

 -- renomeando uma tabela
UPDATE users
 SET  id = '2'
 WHERE email = 'mariazinha@email.com';
UPDATE product
 SET  name = 'cd-Soft-JAZZ'
 WHERE name = 'JAZZZZZZ' ;

 SELECT email FROM product, 
  AND ORDER BY email DESC;