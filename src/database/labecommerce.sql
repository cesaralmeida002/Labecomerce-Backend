-- Active: 1675878877832@@127.0.0.1@3306
CREATE TABLE users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	email TEXT NOT NULL,
	password TEXT NOT NULL
);
CREATE TABLE product (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	price REAL NOT NULL,
    category TEXT NOT NULL 
);
CREATE TABLE purchase (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	total_price REAL NOT NULL,
	paid INTEGER NOT NULL,
    delivered_at TEXT, 
	buyer_id TEXT NOT NULL,
	 Foreign Key (buyer_id) REFERENCES users (id)
);
SELECT * FROM users;

INSERT INTO users (id, email, password)
VALUES 
       ("u001", "jose@email.com", "jose123"),
       ("u002", "maria@email.com", "maria123"),
       ("u003", "joao@email.com", "joao123"),
       ("u004", "juca@email.com", "juca123");

INSERT INTO product (id, name, price, category)
VALUES
(1, "cd-Metalica", 22.99, "MusicalStyle.ROCK"),
(2, "cd-Aviões", 19.90, "MusicalStyle.FORRO"),
(4, "cd-ArtBlakey", 59.90, "MusicalStyle.JAZZ"),
(5, "cd-Audio-Slave", 49.90, "MusicalStyle.ROCK"),
(6, "cd-Bartô-Galeno", 9.90, "MusicalStyle.FORRO");

INSERT INTO purchase (id, total_price, paid, delivered_at, buyer_id)
VALUES 
       ("p001", 25,90, "0", "u001"),
       ("p002", 37,40, "0", "u002"),
       ("p003", 54,90, "0", "u003"),
       ("p004", 22,80, "0", "u004");


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

  SELECT * FROM users
  INNER JOIN purchase
  ON purchase.buyer_id = users.id