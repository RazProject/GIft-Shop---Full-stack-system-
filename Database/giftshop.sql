-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2022 at 08:25 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giftshop`
--
CREATE DATABASE IF NOT EXISTS `giftshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `giftshop`;

-- --------------------------------------------------------

--
-- Table structure for table `gifts`
--

CREATE TABLE `gifts` (
  `giftId` int(11) NOT NULL,
  `targetAudienceId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gifts`
--

INSERT INTO `gifts` (`giftId`, `targetAudienceId`, `name`, `description`, `price`, `discount`) VALUES
(1, 1, 'Doll', 'Doll for children', '150.00', 20),
(2, 1, 'Car', 'Car for Children', '79.99', 30),
(3, 1, 'Truck', 'Truck for Children', '120.00', 50),
(4, 2, 'Spinner', 'Cool Spinner', '49.00', 10),
(5, 1, 'Robot', 'Amazing Robot', '250.00', 25),
(6, 1, 'Cute Doll', 'Cute Doll Ever', '11.00', 22),
(7, 2, 'Amazing Robot', 'Amazing Robot by MariaDB', '80.00', 20);

-- --------------------------------------------------------

--
-- Table structure for table `targetaudience`
--

CREATE TABLE `targetaudience` (
  `targetAudienceId` int(11) NOT NULL,
  `targetAudienceName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `targetaudience`
--

INSERT INTO `targetaudience` (`targetAudienceId`, `targetAudienceName`) VALUES
(1, 'Children'),
(2, 'Youth'),
(3, 'Adults'),
(4, 'Toddlers');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`giftId`),
  ADD KEY `targetAudienceId` (`targetAudienceId`);

--
-- Indexes for table `targetaudience`
--
ALTER TABLE `targetaudience`
  ADD PRIMARY KEY (`targetAudienceId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gifts`
--
ALTER TABLE `gifts`
  MODIFY `giftId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `targetaudience`
--
ALTER TABLE `targetaudience`
  MODIFY `targetAudienceId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gifts`
--
ALTER TABLE `gifts`
  ADD CONSTRAINT `gifts_ibfk_1` FOREIGN KEY (`targetAudienceId`) REFERENCES `targetaudience` (`targetAudienceId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
