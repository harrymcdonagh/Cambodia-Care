CREATE DATABASE IF NOT EXISTS `main_db`;
USE `main_db`;

DROP TABLE IF EXISTS `user_tb`;
CREATE TABLE `user_tb` (
    `userID` int NOT NULL AUTO_INCREMENT,
    `email` varchar(120) DEFAULT NULL,
    `name` varchar(120) DEFAULT NULL,
    `password` varchar(120) DEFAULT NULL,
    `isAdmin` tinyint DEFAULT NULL,
    PRIMARY KEY (`userID`),
    UNIQUE (`email`)
);

INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('Gleb', 'AnimeBest', 'Gleb.krug@gmail.com', 0 );
INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('Sam', 'Tallman', 'Sam.p@gmail.com', 1 );
INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('Harry','Lovecss', 'Harry.M@gmail.com', 0 );
INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('Ben', 'Bimagnet', 'Ben.s@gmail.com', 0 );
INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('Oscar', 'Lovedrink', 'Oscar.s@gmail.com', 0 );
INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('OscarL', 'NewGuy', 'Oscar.l@gmail.com', 1 );
INSERT INTO user_tb (name,password,email,isAdmin) VALUES ('FFF', 'FFF', 'FFF@gmail.com', 1 );