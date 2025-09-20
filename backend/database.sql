CREATE DATABASE  IF NOT EXISTS `mywork`;
USE `mywork`;

--
-- Table structure for table `daily_work`
--

DROP TABLE IF EXISTS `daily_work`;

CREATE TABLE `daily_work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(50) NOT NULL,
  `description_project` text,
  PRIMARY KEY (`id`)
);
