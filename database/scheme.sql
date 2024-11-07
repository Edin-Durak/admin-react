-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2024 at 09:07 PM
-- Server version: 8.0.40
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `broj_sj`
--

CREATE TABLE `broj_sj` (
  `id` int NOT NULL,
  `broj` varchar(50) NOT NULL,
  `vrsta_sj_id` int NOT NULL,
  `status` enum('aktivno','neaktivno') DEFAULT 'aktivno',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idMapa` varchar(255) DEFAULT NULL,
  `duzina` varchar(255) DEFAULT NULL,
  `sirina` varchar(255) DEFAULT NULL,
  `iskoristivaDuzina` varchar(255) DEFAULT NULL,
  `iskoristivaSirina` varchar(255) DEFAULT NULL,
  `maxBrojOdraslih` int DEFAULT NULL,
  `maxBrojDjece` int DEFAULT NULL,
  `vrsta` varchar(255) DEFAULT NULL,
  `osuncanost` varchar(255) DEFAULT NULL,
  `podloga` varchar(255) DEFAULT NULL,
  `panoramaSlika` varchar(255) DEFAULT NULL,
  `slike` json DEFAULT NULL,
  `dostupna` tinyint(1) DEFAULT '0',
  `samoNaUpit` tinyint(1) DEFAULT '0',
  `pausl` tinyint(1) DEFAULT '0',
  `noClick` tinyint(1) DEFAULT '0',
  `header` tinyint(1) DEFAULT '0',
  `nePrikazujBroj` tinyint(1) DEFAULT '0',
  `napomena` text,
  `wifi` tinyint(1) DEFAULT '0',
  `parking` tinyint(1) DEFAULT '0',
  `struja6A` tinyint(1) DEFAULT '0',
  `struja10A` tinyint(1) DEFAULT '0',
  `struja16A` tinyint(1) DEFAULT '0',
  `prikljucakVode` tinyint(1) DEFAULT '0',
  `odvodnja` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `broj_sj`
--

INSERT INTO `broj_sj` (`id`, `broj`, `vrsta_sj_id`, `status`, `created_at`, `updated_at`, `idMapa`, `duzina`, `sirina`, `iskoristivaDuzina`, `iskoristivaSirina`, `maxBrojOdraslih`, `maxBrojDjece`, `vrsta`, `osuncanost`, `podloga`, `panoramaSlika`, `slike`, `dostupna`, `samoNaUpit`, `pausl`, `noClick`, `header`, `nePrikazujBroj`, `napomena`, `wifi`, `parking`, `struja6A`, `struja10A`, `struja16A`, `prikljucakVode`, `odvodnja`) VALUES
(7, '001', 7, 'aktivno', '2024-11-05 23:08:30', '2024-11-05 23:12:08', '1', '5', '5', '4', '4', 2, 2, NULL, 'osuncan', 'Podloga 1', '', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]', 1, 0, 0, 0, 0, 0, '', 1, 1, 0, 0, 1, 1, 0),
(8, '002', 8, 'aktivno', '2024-11-05 23:09:44', '2024-11-05 23:09:44', '2', '25', '20', '20', '18', 5, 4, NULL, 'osuncan', 'Podloga 2', '', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]', 0, 1, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 1, 0),
(9, '003', 9, 'aktivno', '2024-11-05 23:11:11', '2024-11-05 23:11:11', '3', '10', '5', '5', '5', 4, 2, NULL, 'zastakljeno', 'Podloga 1', '', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]', 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0),
(10, '004', 10, 'aktivno', '2024-11-05 23:13:57', '2024-11-05 23:13:57', '4', '4', '5', '5', '4', 5, 5, NULL, 'zastakljeno', 'Podloga 2', '', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]', 1, 0, 0, 0, 0, 0, '', 0, 1, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240319000000-create-broj-sj.js');

-- --------------------------------------------------------

--
-- Table structure for table `vrsta_sj`
--

CREATE TABLE `vrsta_sj` (
  `id` int NOT NULL,
  `naziv` varchar(100) NOT NULL,
  `opis` text,
  `status` enum('aktivno','neaktivno') DEFAULT 'aktivno',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `vrsta` varchar(255) DEFAULT NULL,
  `oznaka` varchar(255) DEFAULT NULL,
  `oznakaPMS` varchar(255) DEFAULT NULL,
  `oznakaBooking` varchar(255) DEFAULT NULL,
  `pmsId` varchar(255) DEFAULT NULL,
  `bookingId` varchar(255) DEFAULT NULL,
  `bookingCjenik` varchar(255) DEFAULT NULL,
  `maxOdraslih` int DEFAULT NULL,
  `maxDjece` int DEFAULT NULL,
  `boja` varchar(255) DEFAULT NULL,
  `slike` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `vrsta_sj`
--

INSERT INTO `vrsta_sj` (`id`, `naziv`, `opis`, `status`, `created_at`, `updated_at`, `vrsta`, `oznaka`, `oznakaPMS`, `oznakaBooking`, `pmsId`, `bookingId`, `bookingCjenik`, `maxOdraslih`, `maxDjece`, `boja`, `slike`) VALUES
(7, 'Prva smještajna jedinica', NULL, 'aktivno', '2024-11-05 23:07:51', '2024-11-05 23:07:51', 'M', 'M', 'M', 'M1', '1', 'M001', '350', 2, 2, '#1283d9', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]'),
(8, 'Druga SJ', NULL, 'aktivno', '2024-11-05 23:09:06', '2024-11-05 23:09:06', 'P', 'P', 'P', 'P01', '003', '0210', '510232', 4, 4, '#ffffff', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]'),
(9, 'Treća SJ', NULL, 'aktivno', '2024-11-05 23:10:26', '2024-11-05 23:10:26', 'G', 'G', 'G', 'ewq', '23415', '523416', '50352', 4, 2, '#ffffff', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]'),
(10, 'Četvrta smještajna jedinica', NULL, 'aktivno', '2024-11-05 23:13:12', '2024-11-05 23:13:12', 'S', 'S', 'S', 'S', 'dsad', 'S005', '250', 4, 2, '#0c8d33', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]'),
(11, 'Peta smještajna jedinica', NULL, 'aktivno', '2024-11-07 17:43:05', '2024-11-07 17:43:05', 'A', 'A', 'A', '123', '123', '513', '5168', 4, 4, '#ffffff', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]'),
(12, 'Šesta smještajna jedinica', NULL, 'aktivno', '2024-11-07 17:43:48', '2024-11-07 17:43:48', 'P', 'P', 'P', 'A', '12345', '12523', '510232', 4, 4, '#ffffff', '[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `broj_sj`
--
ALTER TABLE `broj_sj`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `broj` (`broj`),
  ADD KEY `vrsta_sj_id` (`vrsta_sj_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `vrsta_sj`
--
ALTER TABLE `vrsta_sj`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `naziv` (`naziv`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `broj_sj`
--
ALTER TABLE `broj_sj`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vrsta_sj`
--
ALTER TABLE `vrsta_sj`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `broj_sj`
--
ALTER TABLE `broj_sj`
  ADD CONSTRAINT `broj_sj_ibfk_1` FOREIGN KEY (`vrsta_sj_id`) REFERENCES `vrsta_sj` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
