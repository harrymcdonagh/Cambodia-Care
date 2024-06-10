CREATE DATABASE IF NOT EXISTS `main_db`;
USE `main_db`;

DROP TABLE IF EXISTS `bookings_tb`;
CREATE TABLE `bookings_tb` (
    `bookingID` int NOT NULL AUTO_INCREMENT,
    `dateIN` date DEFAULT NULL,
    `dateOUT` date DEFAULT NULL,
    `type` int DEFAULT NULL,
    `userID` int,
    PRIMARY KEY (`bookingID`),
    FOREIGN KEY (userID) REFERENCES user_tb(userID)
);

INSERT INTO bookings_tb (userID, dateIN, dateOUT, type) VALUES (1, '2024-12-12', '2025-01-12', 0 );
INSERT INTO bookings_tb (userID, dateIN, dateOUT, type) VALUES (3, '2024-10-09', '2025-10-29', 1 );
INSERT INTO bookings_tb (userID, dateIN, dateOUT, type) VALUES (5, '2024-11-13', '2025-12-13', 0 );