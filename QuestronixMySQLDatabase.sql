CREATE SCHEMA `questronix` ;
CREATE TABLE `questronix`.`inventory1` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `items` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`id`));

