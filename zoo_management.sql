-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.3.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for zoo
CREATE DATABASE IF NOT EXISTS `zoo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `zoo`;

-- Dumping structure for table zoo.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `aid` int(50) NOT NULL AUTO_INCREMENT,
  `aname` varchar(50) DEFAULT NULL,
  `alocation` varchar(100) DEFAULT NULL,
  `aemail` varchar(50) DEFAULT NULL,
  `aphone` bigint(20) DEFAULT NULL,
  `apassword` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table zoo.animal
CREATE TABLE IF NOT EXISTS `animal` (
  `aid` int(50) NOT NULL AUTO_INCREMENT,
  `animal` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `feed_time` time DEFAULT NULL,
  `cage_number` int(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `gid` int(11) NOT NULL,
  `zid` int(11) DEFAULT NULL,
  PRIMARY KEY (`aid`),
  KEY `FK_animal_animalguide` (`gid`),
  KEY `FK_animal_admin` (`zid`),
  CONSTRAINT `FK_animal_admin` FOREIGN KEY (`zid`) REFERENCES `admin` (`aid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_animal_animalguide` FOREIGN KEY (`gid`) REFERENCES `animalguide` (`gid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table zoo.animalguide
CREATE TABLE IF NOT EXISTS `animalguide` (
  `gname` varchar(50) DEFAULT NULL,
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `joined_date` varchar(50) DEFAULT NULL,
  `gender` char(10) NOT NULL DEFAULT '',
  `salary` int(50) NOT NULL DEFAULT 0,
  `g_phone` bigint(20) NOT NULL DEFAULT 0,
  `zid` int(11) DEFAULT NULL,
  PRIMARY KEY (`gid`),
  KEY `FK_animalguide_admin` (`zid`),
  CONSTRAINT `FK_animalguide_admin` FOREIGN KEY (`zid`) REFERENCES `admin` (`aid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table zoo.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` bigint(20) NOT NULL DEFAULT 0,
  `address` varchar(50) NOT NULL,
  `gid` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `zid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `FK_customer_animalguide` (`gid`),
  KEY `FK_customer_admin` (`zid`),
  CONSTRAINT `FK_customer_admin` FOREIGN KEY (`zid`) REFERENCES `admin` (`aid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_customer_animalguide` FOREIGN KEY (`gid`) REFERENCES `animalguide` (`gid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table zoo.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `eid` int(50) NOT NULL AUTO_INCREMENT,
  `ename` varchar(50) DEFAULT NULL,
  `salary` bigint(50) DEFAULT NULL,
  `e_phone` bigint(50) DEFAULT NULL,
  `zid` int(20) DEFAULT NULL,
  PRIMARY KEY (`eid`),
  KEY `FK_employee_admin` (`zid`),
  CONSTRAINT `FK_employee_admin` FOREIGN KEY (`zid`) REFERENCES `admin` (`aid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table zoo.zoo
CREATE TABLE IF NOT EXISTS `zoo` (
  `zid` int(11) NOT NULL AUTO_INCREMENT,
  `zname` varchar(50) NOT NULL DEFAULT '',
  `contact` bigint(20) NOT NULL DEFAULT 0,
  `location` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`zid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
