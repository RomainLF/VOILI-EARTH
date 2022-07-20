-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`ArticleVariations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ArticleVariations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `stock` DECIMAL(7) NOT NULL,
  `size` VARCHAR(4) NULL,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Articles` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(7) NOT NULL,
  `exclu` TINYINT NOT NULL,
  `ArticleVariations_id` INT NOT NULL,
  PRIMARY KEY (`Id`, `ArticleVariations_id`),
  INDEX `fk_Articles_ArticleVariations1_idx` (`ArticleVariations_id` ASC) VISIBLE,
  CONSTRAINT `fk_Articles_ArticleVariations1`
    FOREIGN KEY (`ArticleVariations_id`)
    REFERENCES `mydb`.`ArticleVariations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Categorys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Categorys` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `Articles_Id` INT NOT NULL,
  PRIMARY KEY (`Id`, `Articles_Id`),
  INDEX `fk_Categorys_Articles_idx` (`Articles_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Categorys_Articles`
    FOREIGN KEY (`Articles_Id`)
    REFERENCES `mydb`.`Articles` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `birthday` DATE NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;