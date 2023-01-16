-- Active: 1673873560254@@127.0.0.1@3306
CREATE TABLE users (
	id INTEGER PRIMARY KEY UNIQUE NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL
);

INSERT INTO users (id, email, password)
VALUES (1, "astrodev@email.com", "astrodev123");
INSERT INTO users (id, email, password)
VALUES (2, "joao@email.com", "joao123");
INSERT INTO users (id, email, password)
VALUES (3, "maria@email.com", "maria123");

SELECT * FROM users;

CREATE TABLE products (
	id INTEGER PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	price REAL NOT NULL,
	category TEXT NOT NULL
);
SELECT * FROM products;

INSERT INTO products (id, name,  price, category)
VALUES ("um", "blusa azul", 2990 ,"blusas"),
VALUES ("dois", "blusa branca", 3990 ,"camiseta"),
VALUES ("tres", "blusa amarela", 3590 ,"camisa"),
VALUES ("quatro", "calça social", 12990 ,"calça"),
VALUES ("cinco", "calça jeans", 11990 ,"jeans");


SELECT * FROM products;