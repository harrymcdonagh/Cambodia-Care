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