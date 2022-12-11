CREATE DATABASE  IF NOT EXISTS `star_chef` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `star_chef`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: star_chef
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `allergic_for_user`
--

DROP TABLE IF EXISTS `allergic_for_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergic_for_user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdUser` int NOT NULL,
  `IdMaterial` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `26.Allergic for user for User_idx` (`IdUser`),
  KEY `27.Allergic for user for Material_idx` (`IdMaterial`),
  CONSTRAINT `26.Allergic for user for User` FOREIGN KEY (`IdUser`) REFERENCES `user` (`Id`),
  CONSTRAINT `27.Allergic for user for Material` FOREIGN KEY (`IdMaterial`) REFERENCES `material` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergic_for_user`
--

LOCK TABLES `allergic_for_user` WRITE;
/*!40000 ALTER TABLE `allergic_for_user` DISABLE KEYS */;
INSERT INTO `allergic_for_user` VALUES (1,3,17),(2,5,14);
/*!40000 ALTER TABLE `allergic_for_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `baser_recipe`
--

DROP TABLE IF EXISTS `baser_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baser_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `Baser` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `19.Baser recipe for Recipe_idx` (`IdRecipe`),
  CONSTRAINT `19.Baser recipe for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baser_recipe`
--

LOCK TABLES `baser_recipe` WRITE;
/*!40000 ALTER TABLE `baser_recipe` DISABLE KEYS */;
INSERT INTO `baser_recipe` VALUES (1,19,'[object Object]'),(2,19,'[object Object]'),(3,19,'[object Object]'),(4,19,'[object Object]'),(5,20,'[object Object]'),(6,20,'[object Object]'),(7,20,'[object Object]'),(8,20,'[object Object]'),(9,21,'[object Object]'),(10,21,'[object Object]'),(11,21,'[object Object]'),(12,21,'[object Object]'),(13,22,'[object Object]'),(14,22,'[object Object]'),(15,22,'[object Object]'),(16,22,'[object Object]'),(17,23,'[object Object]'),(18,23,'[object Object]'),(19,23,'[object Object]'),(20,23,'[object Object]'),(21,24,'[object Object]'),(22,24,'[object Object]'),(23,24,'[object Object]'),(24,24,'[object Object]'),(25,25,'[object Object]'),(26,25,'[object Object]'),(27,25,'[object Object]'),(28,25,'[object Object]'),(29,26,'[object Object]'),(30,26,'[object Object]'),(31,26,'[object Object]'),(32,26,'[object Object]'),(33,27,'[object Object]'),(34,27,'[object Object]'),(35,27,'[object Object]'),(36,27,'[object Object]'),(37,28,'[object Object]'),(38,28,'[object Object]'),(39,28,'[object Object]'),(40,28,'[object Object]'),(41,29,'[object Object]'),(42,29,'[object Object]'),(43,29,'[object Object]'),(44,29,'[object Object]'),(45,30,'[object Object]'),(46,30,'[object Object]'),(47,30,'[object Object]'),(48,30,'[object Object]'),(49,31,'[object Object]'),(50,31,'[object Object]'),(51,31,'[object Object]'),(52,31,'[object Object]'),(53,32,'[object Object]'),(54,32,'[object Object]'),(55,32,'[object Object]'),(56,32,'[object Object]'),(57,33,'[object Object]'),(58,33,'[object Object]'),(59,33,'[object Object]'),(60,33,'[object Object]'),(61,34,'[object Object]'),(62,34,'[object Object]'),(63,34,'[object Object]'),(64,34,'[object Object]');
/*!40000 ALTER TABLE `baser_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `IdCategory` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `16.Category for Category(tt)_idx` (`IdCategory`),
  CONSTRAINT `16.Category for Category(tt)` FOREIGN KEY (`IdCategory`) REFERENCES `category` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'ארוחות',NULL),(2,'קינוחים',NULL),(3,'עוגות',NULL),(4,'פסח',NULL),(5,'בשרי',1),(6,'חלבי',1),(7,'פרווה',1),(8,'מנות ביניים',1),(9,'בשרי',2),(10,'חלבי',2),(11,'פרווה',2),(12,'בשרי',3),(13,'חלבי',3),(14,'ארוחות',4),(15,'קינוחים',4),(16,'עוגות',4);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_for_recipe`
--

DROP TABLE IF EXISTS `category_for_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_for_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `IdCategory` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `17.Category for recipe for Recipe_idx` (`IdRecipe`),
  KEY `18.Category for recipe for Category_idx` (`IdCategory`),
  CONSTRAINT `17.Category for recipe for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`),
  CONSTRAINT `18.Category for recipe for Recipe(ttC)` FOREIGN KEY (`IdCategory`) REFERENCES `recipe` (`IdSubCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_for_recipe`
--

LOCK TABLES `category_for_recipe` WRITE;
/*!40000 ALTER TABLE `category_for_recipe` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_for_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_live`
--

DROP TABLE IF EXISTS `chat_live`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_live` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(500) NOT NULL,
  `IdUser` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `28.Chat live for User_idx` (`IdUser`),
  CONSTRAINT `28.Chat live for User` FOREIGN KEY (`IdUser`) REFERENCES `user` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_live`
--

LOCK TABLES `chat_live` WRITE;
/*!40000 ALTER TABLE `chat_live` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_live` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `converter`
--

DROP TABLE IF EXISTS `converter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `converter` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CountCup` float DEFAULT NULL,
  `CountTblSpoon` float DEFAULT NULL,
  `Spoon` float DEFAULT NULL,
  `Gram` float DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `converter`
--

LOCK TABLES `converter` WRITE;
/*!40000 ALTER TABLE `converter` DISABLE KEYS */;
/*!40000 ALTER TABLE `converter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruction`
--

DROP TABLE IF EXISTS `instruction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruction` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `Text` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `31.Instruction for Recipe_idx` (`IdRecipe`),
  CONSTRAINT `31.Instruction for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruction`
--

LOCK TABLES `instruction` WRITE;
/*!40000 ALTER TABLE `instruction` DISABLE KEYS */;
INSERT INTO `instruction` VALUES (1,19,'[object Object]'),(2,19,'[object Object]'),(3,19,'[object Object]'),(4,19,'[object Object]'),(5,19,'[object Object]'),(6,19,'[object Object]'),(7,19,'[object Object]'),(8,19,'[object Object]'),(9,20,'[object Object]'),(10,20,'[object Object]'),(11,20,'[object Object]'),(12,20,'[object Object]'),(13,20,'[object Object]'),(14,20,'[object Object]'),(15,20,'[object Object]'),(16,20,'[object Object]'),(17,21,'[object Object]'),(18,21,'[object Object]'),(19,21,'[object Object]'),(20,21,'[object Object]'),(21,21,'[object Object]'),(22,21,'[object Object]'),(23,21,'[object Object]'),(24,21,'[object Object]'),(25,22,'[object Object]'),(26,22,'[object Object]'),(27,22,'[object Object]'),(28,22,'[object Object]'),(29,22,'[object Object]'),(30,22,'[object Object]'),(31,22,'[object Object]'),(32,22,'[object Object]'),(33,23,'[object Object]'),(34,23,'[object Object]'),(35,23,'[object Object]'),(36,23,'[object Object]'),(37,23,'[object Object]'),(38,23,'[object Object]'),(39,23,'[object Object]'),(40,23,'[object Object]'),(41,24,'[object Object]'),(42,24,'[object Object]'),(43,24,'[object Object]'),(44,24,'[object Object]'),(45,24,'[object Object]'),(46,24,'[object Object]'),(47,24,'[object Object]'),(48,24,'[object Object]'),(49,25,'[object Object]'),(50,25,'[object Object]'),(51,25,'[object Object]'),(52,25,'[object Object]'),(53,25,'[object Object]'),(54,25,'[object Object]'),(55,25,'[object Object]'),(56,25,'[object Object]'),(57,26,'[object Object]'),(58,26,'[object Object]'),(59,26,'[object Object]'),(60,26,'[object Object]'),(61,26,'[object Object]'),(62,26,'[object Object]'),(63,26,'[object Object]'),(64,26,'[object Object]'),(65,27,'[object Object]'),(66,27,'[object Object]'),(67,27,'[object Object]'),(68,27,'[object Object]'),(69,27,'[object Object]'),(70,27,'[object Object]'),(71,27,'[object Object]'),(72,27,'[object Object]'),(73,28,'[object Object]'),(74,28,'[object Object]'),(75,28,'[object Object]'),(76,28,'[object Object]'),(77,28,'[object Object]'),(78,28,'[object Object]'),(79,28,'[object Object]'),(80,28,'[object Object]'),(81,29,'[object Object]'),(82,29,'[object Object]'),(83,29,'[object Object]'),(84,29,'[object Object]'),(85,29,'[object Object]'),(86,29,'[object Object]'),(87,29,'[object Object]'),(88,29,'[object Object]'),(89,30,'[object Object]'),(90,30,'[object Object]'),(91,30,'[object Object]'),(92,30,'[object Object]'),(93,30,'[object Object]'),(94,30,'[object Object]'),(95,30,'[object Object]'),(96,30,'[object Object]'),(97,31,'[object Object]'),(98,31,'[object Object]'),(99,31,'[object Object]'),(100,31,'[object Object]'),(101,31,'[object Object]'),(102,31,'[object Object]'),(103,31,'[object Object]'),(104,31,'[object Object]'),(105,32,'[object Object]'),(106,32,'[object Object]'),(107,32,'[object Object]'),(108,32,'[object Object]'),(109,32,'[object Object]'),(110,32,'[object Object]'),(111,32,'[object Object]'),(112,32,'[object Object]'),(113,33,'[object Object]'),(114,33,'[object Object]'),(115,33,'[object Object]'),(116,33,'[object Object]'),(117,33,'[object Object]'),(118,33,'[object Object]'),(119,33,'[object Object]'),(120,33,'[object Object]'),(121,34,'[object Object]'),(122,34,'[object Object]'),(123,34,'[object Object]'),(124,34,'[object Object]'),(125,34,'[object Object]'),(126,34,'[object Object]'),(127,34,'[object Object]'),(128,34,'[object Object]');
/*!40000 ALTER TABLE `instruction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like_for_recipe`
--

DROP TABLE IF EXISTS `like_for_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like_for_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `IdUser` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `24.Like for recipe for Recipe _idx` (`IdRecipe`),
  KEY `25.Like for recipe for User_idx` (`IdUser`),
  CONSTRAINT `24.Like for recipe for Recipe ` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`),
  CONSTRAINT `25.Like for recipe for User` FOREIGN KEY (`IdUser`) REFERENCES `user` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like_for_recipe`
--

LOCK TABLES `like_for_recipe` WRITE;
/*!40000 ALTER TABLE `like_for_recipe` DISABLE KEYS */;
INSERT INTO `like_for_recipe` VALUES (2,6,3),(3,10,3),(4,10,4),(5,12,4);
/*!40000 ALTER TABLE `like_for_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like_for_reply`
--

DROP TABLE IF EXISTS `like_for_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like_for_reply` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdUser` int NOT NULL,
  `IdReply` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `33.Like for reply for User_idx` (`IdUser`),
  KEY `34.Like for reply for Reply_idx` (`IdReply`),
  CONSTRAINT `33.Like for reply for User` FOREIGN KEY (`IdUser`) REFERENCES `user` (`Id`),
  CONSTRAINT `34.Like for reply for Reply` FOREIGN KEY (`IdReply`) REFERENCES `reply` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like_for_reply`
--

LOCK TABLES `like_for_reply` WRITE;
/*!40000 ALTER TABLE `like_for_reply` DISABLE KEYS */;
INSERT INTO `like_for_reply` VALUES (1,5,8),(2,7,8);
/*!40000 ALTER TABLE `like_for_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `IdTypeMaterial` int NOT NULL,
  `NumCaloriesFor100Gram` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `9.Material for Material type_idx` (`IdTypeMaterial`),
  CONSTRAINT `9.Material for Material type` FOREIGN KEY (`IdTypeMaterial`) REFERENCES `material_type` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=214 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'אורז',2,NULL),(2,'שן שום',2,NULL),(3,'ראש שום',2,NULL),(4,'שום כתוש',2,NULL),(5,'אבקת שום',2,NULL),(6,'קמח',2,NULL),(7,'מים',1,NULL),(8,'סוכר',2,NULL),(9,'מלח',2,NULL),(10,'אבקת אפיה',2,NULL),(11,'סוכר וניל',2,NULL),(12,'קפה שחור',2,NULL),(13,'שוקולית',2,NULL),(14,'חלב',1,NULL),(15,'שמן',1,NULL),(16,'שמן זית',1,NULL),(17,'בוטנים',2,NULL),(18,'חמאת בוטנים',2,NULL),(19,'ממרח אזגוזים',2,NULL),(20,'שוקולד פרה- עלית',2,NULL),(21,'קקאו',2,NULL),(22,'ערמונים',2,NULL),(23,'חמאה',2,NULL),(24,'מרגרינה',2,NULL),(25,'שמרים יבשים',2,NULL),(26,'רוטב טריאקי',1,NULL),(27,'רוטב סויה',1,NULL),(28,'רוטב צ\'ילי',1,NULL),(29,'כורכום',2,NULL),(30,'פלפל חריף',2,NULL),(31,'אבקת פלפל שחור',2,NULL),(32,'גזר',2,NULL),(33,'תפוח',2,NULL),(34,'בננה',2,NULL),(35,'מלפפון',2,NULL),(36,'גמבה',2,NULL),(37,'פלפל צהוב',2,NULL),(38,'פלפל ירוק',2,NULL),(39,'פלפל כתום',2,NULL),(40,'פלפל אדום',2,NULL),(41,'קיווי',2,NULL),(42,'תפוז',2,NULL),(43,'קלמנטינה',2,NULL),(44,'שזיף',2,NULL),(45,'מנדרינה',2,NULL),(46,'אפרסק',2,NULL),(47,'אפרסמון',2,NULL),(48,'אפרשזיף',2,NULL),(49,'אננס',2,NULL),(50,'קוקוס',2,NULL),(51,'מנגו',2,NULL),(52,'עגבניה',2,NULL),(53,'תפוז סחוט',1,NULL),(54,'מי קוקוס',1,NULL),(55,'ענבים ירוקים',2,NULL),(56,'ענבים סגולים',2,NULL),(57,'כרוב',2,NULL),(58,'כוסברה',2,NULL),(59,'נענע',2,NULL),(60,'פרטוזיליה',2,NULL),(61,'קולורבי',2,NULL),(62,'כרפס',2,NULL),(63,'שומר',2,NULL),(64,'תיון',2,NULL),(65,'שעועית שחורה',2,NULL),(66,'אבקת שעועית שחורה',2,NULL),(67,'שעועית לבנה',2,NULL),(68,'אבקת קינמון',2,NULL),(69,'גבינה לבנה',2,NULL),(70,'קוטג\'',2,NULL),(71,'גבינה צהובה',2,NULL),(72,'מקלות פסטה',2,NULL),(73,'חבילת מקלות פסטה',2,NULL),(74,'ביצים',1,NULL),(75,'ביצה',1,NULL),(76,'ביצה קשה',2,NULL),(77,'קצפת צימחית',1,NULL),(78,'שמנת להקצפה',1,NULL),(79,'שמנת חמוצה',2,NULL),(80,'טבלת שוקולד מריר',2,NULL),(81,'שוקולד מריר',2,NULL),(82,'טבלת שוקולד חלב',2,NULL),(83,'שוקולד חלב',2,NULL),(84,'ממרח קינדר',2,NULL),(85,'שוקולד לבישול',2,NULL),(86,'שוקולד צ\'יפס',2,NULL),(87,'שומשום',2,NULL),(88,'אבקת קוקוס',2,NULL),(89,'לימון',2,NULL),(90,'לימונים',2,NULL),(91,'מיץ לימון',1,NULL),(92,'מיץ תפוזים',1,NULL),(93,'מיץ ענבים',1,NULL),(94,'בירה',1,NULL),(95,'ריבת תותים',2,NULL),(96,'תבלין לעל האש',2,NULL),(97,'מקלות קינמון',2,NULL),(98,'מקל קינמון',2,NULL),(99,'פלפל שחור גרוס',2,NULL),(100,'פלפל שחור',2,NULL),(101,'כמון',2,NULL),(102,'פפריקה מתוקה',2,NULL),(103,'פפריקה חריפה',2,NULL),(104,'תמצית רום',1,NULL),(105,'תמצית וניל',1,NULL),(106,'שמנת מתוקה להקצפה',2,NULL),(107,'מים חמים',1,NULL),(108,'מים פושרים',1,NULL),(109,'פטל',1,NULL),(110,'בסקוויטים',2,NULL),(111,'חבילת ביסקוויטים',2,NULL),(112,'עוגיות אוראו',2,NULL),(113,'חבילת אוגיות אוראו',2,NULL),(114,'חבילת עוגיות לוטוס',2,NULL),(115,'עוגיות לוטוס',2,NULL),(116,'ממרח לוטוס',2,NULL),(117,'סילאן',1,NULL),(118,'נס קפה',2,NULL),(119,'רוטב סילאן',1,NULL),(120,'ממרח סילאן',2,NULL),(121,'קוסקוס',2,NULL),(122,'חבילת קוסקוס',2,NULL),(123,'חבילות קוסקוס',2,NULL),(124,'גרגרי חומוס',2,NULL),(125,'ממרח תמרים',2,NULL),(126,'ממרח חומוס',2,NULL),(127,'תפוח אדמה',2,NULL),(128,'אבקת פלאפל',2,NULL),(129,'בצל',2,NULL),(130,'בצל ירוק',2,NULL),(131,'בצל סגול',2,NULL),(132,'כרוב לבן',2,NULL),(133,'כרוב סגול',2,NULL),(134,'גבינה מלוחה',2,NULL),(135,'גבינה צפתית',2,NULL),(136,'גבינה בולגרית',2,NULL),(137,'גבינה מותכת',2,NULL),(138,'צבע מאכל',2,NULL),(139,'חמאה מומסת',1,NULL),(140,'שמיר',2,NULL),(141,'עלי גפן',2,NULL),(142,'לחם פרוס',2,NULL),(143,'לחם',2,NULL),(144,'חלה',2,NULL),(145,'פרוסת לחם',2,NULL),(146,'פיתה',2,NULL),(147,'לחמניה',2,NULL),(148,'בגט',2,NULL),(149,'חלב סויה',1,NULL),(150,'חלב וניל',1,NULL),(151,'חלב תנובה לקפה',1,NULL),(152,'זיתים',2,NULL),(153,'זיתים שחורים',2,NULL),(154,'זיתים ירוקים',2,NULL),(155,'קטשופ',1,NULL),(156,'זיתים שחורים חתוכים',2,NULL),(157,'זיתים ירוקים חתוחים',2,NULL),(158,'רסק עגבניות',2,NULL),(159,'ספגטי',2,NULL),(160,'טונה',2,NULL),(161,'סרדינים',2,NULL),(162,'דג פילה מושט',2,NULL),(163,'דג סלומון',2,NULL),(164,'דג נסיכה',2,NULL),(165,'דג חי',2,NULL),(166,'דג מלוח',2,NULL),(167,'פטריות בשימורים',2,NULL),(168,'פטריות חיות',2,NULL),(169,'פלפל חריף',2,NULL),(170,'בצק פילו',2,NULL),(171,'בצק עלים',2,NULL),(172,'שמן קנולה',1,NULL),(173,'שמן סויה',1,NULL),(174,'שמן קוקוס',2,NULL),(175,'אבקת מרק עוף',2,NULL),(176,'אבקת פטריות',2,NULL),(177,'אבקת בצל',2,NULL),(178,'חלב מוקצף',1,NULL),(179,'פתיתים',2,NULL),(180,'מלפפון חמוץ',2,NULL),(181,'תות',2,NULL),(182,'מלון',2,NULL),(183,'אבטיח',2,NULL),(184,'פסיפלורה',2,NULL),(185,'לבבות דקל',2,NULL),(186,'תירס גמדי',2,NULL),(187,'תירס בשימורים',2,NULL),(188,'קילחי תירס',2,NULL),(189,'פודינג',2,NULL),(190,'פודינג וניל',2,NULL),(191,'פודינג שוקולד',2,NULL),(192,'אבקת ג\'לי',2,NULL),(193,'ג\'לי',2,NULL),(194,'פודינג ריבת חלב',2,NULL),(195,'ממרח ריבת חלב',2,NULL),(196,'ריבת חלב',1,NULL),(197,'חלמונים',1,NULL),(198,'חלבונים',1,NULL),(199,'חלמון',1,NULL),(200,'חלבון',1,NULL),(201,'מיכל שמנת מתוקה',1,NULL),(202,'מיכל שמנת להקצפה',1,NULL),(203,'שמנת לבישול',1,NULL),(204,'מיכל שמנת לבישול',1,NULL),(205,'מיכל שמנת מתוקה להקצפה',1,NULL),(206,'קופסאות גבינה',2,NULL),(207,'שוקולד לבן',2,NULL),(208,'שוקולד חום',2,NULL),(209,'קורנפלור',2,NULL),(210,'קליק',2,NULL),(211,'ג\'לטין',2,NULL),(212,'שקדים',2,NULL),(213,'שמרית',2,NULL);
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_for_recipe`
--

DROP TABLE IF EXISTS `material_for_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_for_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `IdMaterial` int NOT NULL,
  `IdReceptacle` int DEFAULT NULL,
  `Quantity` float DEFAULT NULL,
  `IdWeightType` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `5.Material for recipe for Recipe_idx` (`IdRecipe`),
  KEY `6.Material for recipe for Material_idx` (`IdMaterial`),
  KEY `7.Material for recipe for Receptacle_idx` (`IdReceptacle`),
  KEY `8.Material for recipe for Weight type_idx` (`IdWeightType`),
  CONSTRAINT `5.Material for recipe for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`),
  CONSTRAINT `6.Material for recipe for Material` FOREIGN KEY (`IdMaterial`) REFERENCES `material` (`Id`),
  CONSTRAINT `7.Material for recipe for Receptacle` FOREIGN KEY (`IdReceptacle`) REFERENCES `receptacle` (`Id`),
  CONSTRAINT `8.Material for recipe for Weight type` FOREIGN KEY (`IdWeightType`) REFERENCES `weight_type` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_for_recipe`
--

LOCK TABLES `material_for_recipe` WRITE;
/*!40000 ALTER TABLE `material_for_recipe` DISABLE KEYS */;
INSERT INTO `material_for_recipe` VALUES (2,13,1,NULL,5,2),(4,14,1,NULL,5,2),(5,14,7,1,8,1),(6,15,1,NULL,5,2),(7,15,7,1,8,1),(8,16,1,NULL,5,2),(9,16,7,1,8,1),(10,17,1,NULL,5,2),(11,17,7,1,8,1),(12,17,3,NULL,4,NULL),(13,17,4,1,6,3),(14,17,8,2,1,NULL),(15,17,9,1,9,1),(16,18,1,NULL,5,2),(17,18,7,1,8,1),(18,18,3,NULL,4,NULL),(19,18,4,1,6,3),(20,18,8,2,1,NULL),(21,18,9,1,9,1),(22,19,1,NULL,5,2),(23,19,7,1,8,1),(24,19,3,NULL,4,NULL),(25,19,4,1,6,3),(26,19,8,2,1,NULL),(27,19,9,1,9,1),(28,20,1,NULL,5,2),(29,20,7,1,8,1),(30,20,3,NULL,4,NULL),(31,20,4,1,6,3),(32,20,8,2,1,NULL),(33,20,9,1,9,1),(34,21,1,NULL,5,2),(35,21,7,1,8,1),(36,21,3,NULL,4,NULL),(37,21,4,1,6,3),(38,21,8,2,1,NULL),(39,21,9,1,9,1),(40,22,1,NULL,5,2),(41,22,7,1,8,1),(42,22,3,NULL,4,NULL),(43,22,4,1,6,3),(44,22,8,2,1,NULL),(45,22,9,1,9,1),(46,23,1,NULL,5,2),(47,23,7,1,8,1),(48,23,3,NULL,4,NULL),(49,23,4,1,6,3),(50,23,8,2,1,NULL),(51,23,9,1,9,1),(52,24,1,NULL,5,2),(53,24,7,1,8,1),(54,24,3,NULL,4,NULL),(55,24,4,1,6,3),(56,24,8,2,1,NULL),(57,24,9,1,9,1),(58,25,1,NULL,5,2),(59,25,7,1,8,1),(60,25,3,NULL,4,NULL),(61,25,4,1,6,3),(62,25,8,2,1,NULL),(63,25,9,1,9,1),(64,26,1,NULL,5,2),(65,26,7,1,8,1),(66,26,3,NULL,4,NULL),(67,26,4,1,6,3),(68,26,8,2,1,NULL),(69,26,9,1,9,1),(70,27,1,NULL,5,2),(71,27,7,1,8,1),(72,27,3,NULL,4,NULL),(73,27,4,1,6,3),(74,27,8,2,1,NULL),(75,27,9,1,9,1),(76,28,1,NULL,5,2),(77,28,7,1,8,1),(78,28,3,NULL,4,NULL),(79,28,4,1,6,3),(80,28,8,2,1,NULL),(81,28,9,1,9,1),(82,29,1,NULL,5,2),(83,29,7,1,8,1),(84,29,3,NULL,4,NULL),(85,29,4,1,6,3),(86,29,8,2,1,NULL),(87,29,9,1,9,1),(88,30,1,NULL,5,2),(89,30,7,1,8,1),(90,30,3,NULL,4,NULL),(91,30,4,1,6,3),(92,30,8,2,1,NULL),(93,30,9,1,9,1),(94,31,1,NULL,5,2),(95,31,7,1,8,1),(96,31,3,NULL,4,NULL),(97,31,4,1,6,3),(98,31,8,2,1,NULL),(99,31,9,1,9,1),(100,32,1,NULL,5,2),(101,32,7,1,8,1),(102,32,3,NULL,4,NULL),(103,32,4,1,6,3),(104,32,8,2,1,NULL),(105,32,9,1,9,1),(106,33,1,NULL,5,2),(107,33,7,1,8,1),(108,33,3,NULL,4,NULL),(109,33,4,1,6,3),(110,33,8,2,1,NULL),(111,33,9,1,9,1),(112,34,1,NULL,5,2),(113,34,7,1,8,1),(114,34,3,NULL,4,NULL),(115,34,4,1,6,3),(116,34,8,2,1,NULL),(117,34,9,1,9,1);
/*!40000 ALTER TABLE `material_for_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_type`
--

DROP TABLE IF EXISTS `material_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_type` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_type`
--

LOCK TABLES `material_type` WRITE;
/*!40000 ALTER TABLE `material_type` DISABLE KEYS */;
INSERT INTO `material_type` VALUES (1,'נוזל'),(2,'יבש');
/*!40000 ALTER TABLE `material_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `num_recipe_arrivals`
--

DROP TABLE IF EXISTS `num_recipe_arrivals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `num_recipe_arrivals` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `Count` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `23.	Num recipe arrivals for Recipe_idx` (`IdRecipe`),
  CONSTRAINT `23.	Num recipe arrivals for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `num_recipe_arrivals`
--

LOCK TABLES `num_recipe_arrivals` WRITE;
/*!40000 ALTER TABLE `num_recipe_arrivals` DISABLE KEYS */;
/*!40000 ALTER TABLE `num_recipe_arrivals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `number_of_daily_enters`
--

DROP TABLE IF EXISTS `number_of_daily_enters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `number_of_daily_enters` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `Enter'sNumber` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `number_of_daily_enters`
--

LOCK TABLES `number_of_daily_enters` WRITE;
/*!40000 ALTER TABLE `number_of_daily_enters` DISABLE KEYS */;
/*!40000 ALTER TABLE `number_of_daily_enters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture_for_recipe`
--

DROP TABLE IF EXISTS `picture_for_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `picture_for_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `Picture` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `12.Picture for recipe for Recipe_idx` (`IdRecipe`),
  CONSTRAINT `12.Picture for recipe for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture_for_recipe`
--

LOCK TABLES `picture_for_recipe` WRITE;
/*!40000 ALTER TABLE `picture_for_recipe` DISABLE KEYS */;
INSERT INTO `picture_for_recipe` VALUES (1,1,'טאוחגא '),(2,12,'undefined'),(3,12,'undefined'),(4,13,'fdgghfhgh'),(5,13,'fcmfyjhghu'),(6,14,'fdgghfhgh'),(7,14,'fcmfyjhghu'),(8,15,'fdgghfhgh'),(9,15,'fcmfyjhghu'),(10,16,'fdgghfhgh'),(11,16,'fcmfyjhghu'),(12,17,'fdgghfhgh'),(13,17,'fcmfyjhghu'),(14,18,'fdgghfhgh'),(15,18,'fcmfyjhghu'),(16,19,'fdgghfhgh'),(17,19,'fcmfyjhghu'),(18,20,'fdgghfhgh'),(19,20,'fcmfyjhghu'),(20,21,'fdgghfhgh'),(21,21,'fcmfyjhghu'),(22,22,'fdgghfhgh'),(23,22,'fcmfyjhghu'),(24,23,'fdgghfhgh'),(25,23,'fcmfyjhghu'),(26,24,'fdgghfhgh'),(27,24,'fcmfyjhghu'),(28,25,'fdgghfhgh'),(29,25,'fcmfyjhghu'),(30,26,'fdgghfhgh'),(31,26,'fcmfyjhghu'),(32,27,'fdgghfhgh'),(33,27,'fcmfyjhghu'),(34,28,'fdgghfhgh'),(35,28,'fcmfyjhghu'),(36,29,'fdgghfhgh'),(37,29,'fcmfyjhghu'),(38,30,'fdgghfhgh'),(39,30,'fcmfyjhghu'),(40,31,'fdgghfhgh'),(41,31,'fcmfyjhghu'),(42,32,'fdgghfhgh'),(43,32,'fcmfyjhghu'),(44,33,'fdgghfhgh'),(45,33,'fcmfyjhghu'),(46,34,'fdgghfhgh'),(47,34,'fcmfyjhghu');
/*!40000 ALTER TABLE `picture_for_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture_for_user`
--

DROP TABLE IF EXISTS `picture_for_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `picture_for_user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Picture` varchar(45) NOT NULL,
  `IdUser` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture_for_user`
--

LOCK TABLES `picture_for_user` WRITE;
/*!40000 ALTER TABLE `picture_for_user` DISABLE KEYS */;
INSERT INTO `picture_for_user` VALUES (1,'ytrhn ',1);
/*!40000 ALTER TABLE `picture_for_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rcipe_for_home_page`
--

DROP TABLE IF EXISTS `rcipe_for_home_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rcipe_for_home_page` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `IdRecipeTypeForPublish` int NOT NULL,
  `Description` varchar(1000) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `29.Recipe for home page for Recipe_idx` (`IdRecipe`),
  KEY `30.Recipe for home page for Recipe type for publish_idx` (`IdRecipeTypeForPublish`),
  CONSTRAINT `29.Recipe for home page for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`),
  CONSTRAINT `30.Recipe for home page for Recipe type for publish` FOREIGN KEY (`IdRecipeTypeForPublish`) REFERENCES `recipe_type_for_publish` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rcipe_for_home_page`
--

LOCK TABLES `rcipe_for_home_page` WRITE;
/*!40000 ALTER TABLE `rcipe_for_home_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `rcipe_for_home_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receptacle`
--

DROP TABLE IF EXISTS `receptacle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receptacle` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `gram/mil` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receptacle`
--

LOCK TABLES `receptacle` WRITE;
/*!40000 ALTER TABLE `receptacle` DISABLE KEYS */;
INSERT INTO `receptacle` VALUES (1,'כוס',250),(2,'כפית',10),(3,'כף',20);
/*!40000 ALTER TABLE `receptacle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `EstimatedPreparationTime` time DEFAULT NULL,
  `QuantityDiners` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdCategory` int NOT NULL,
  `IdSubCategory` int DEFAULT NULL,
  `Likke` int DEFAULT NULL,
  `IdStatusResipe` int NOT NULL,
  `NumOfEnter` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `1.Recipe for User _idx` (`IdUser`),
  KEY `2.Recipe for Category_idx` (`IdCategory`),
  KEY `3.Recipe(tt) for Category_idx` (`IdSubCategory`),
  KEY `4.Recipe for Status recipe_idx` (`IdStatusResipe`),
  CONSTRAINT `1.Recipe for User ` FOREIGN KEY (`IdUser`) REFERENCES `user` (`Id`),
  CONSTRAINT `2.Recipe for Category` FOREIGN KEY (`IdCategory`) REFERENCES `category` (`Id`),
  CONSTRAINT `3.Recipe for Category(tt)` FOREIGN KEY (`IdSubCategory`) REFERENCES `category` (`Id`),
  CONSTRAINT `4.Recipe for Status recipe` FOREIGN KEY (`IdStatusResipe`) REFERENCES `status_recipe` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,'קפה נמס','00:00:03',1,2,2,10,NULL,2,NULL),(6,'yoyo','00:20:00',5,3,1,6,1,2,5),(7,'yoyo','00:20:00',5,3,1,6,0,2,0),(8,'yoyo','00:20:00',5,3,1,6,0,2,0),(9,'yoyo','00:20:00',5,3,1,6,0,2,0),(10,'yoyo','00:20:00',5,3,1,6,0,2,0),(12,'pizza','00:20:00',5,3,1,6,0,2,0),(13,'yoyo','00:20:00',5,3,1,6,0,2,0),(14,'yoyo','00:20:00',5,3,1,6,0,2,0),(15,'yoyo','00:20:00',5,3,1,6,0,2,0),(16,'yoyo','00:20:00',5,3,1,6,0,2,0),(17,'yoyo','00:20:00',5,3,1,6,0,2,0),(18,'yoyo','00:20:00',5,3,1,6,0,2,0),(19,'yoyo','00:20:00',5,3,1,6,0,2,0),(20,'yoyo','00:20:00',5,3,1,6,0,2,0),(21,'yoyo','00:20:00',5,3,1,6,0,2,0),(22,'yoyo','00:20:00',5,3,1,6,0,2,0),(23,'lo','00:20:00',5,3,1,6,0,1,0),(24,'lo','00:20:00',5,3,1,6,0,1,0),(25,'yoyo','00:20:00',5,3,1,6,0,2,0),(26,'yoyo','00:20:00',5,3,1,6,0,2,0),(27,'yoyo','00:20:00',5,3,1,6,0,2,0),(28,'pizza','00:20:00',5,3,1,6,0,2,0),(29,'pizza','00:20:00',5,3,1,6,0,2,0),(30,'pizza','00:20:00',5,3,1,6,0,2,0),(31,'pizza','00:20:00',5,3,1,6,0,2,0),(32,'pizza','00:20:00',5,3,1,6,0,2,0),(33,'pizza','00:20:00',5,3,1,6,0,2,0),(34,'jimin','00:20:00',5,3,1,6,0,4,0);
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_type_for_publish`
--

DROP TABLE IF EXISTS `recipe_type_for_publish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_type_for_publish` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_type_for_publish`
--

LOCK TABLES `recipe_type_for_publish` WRITE;
/*!40000 ALTER TABLE `recipe_type_for_publish` DISABLE KEYS */;
INSERT INTO `recipe_type_for_publish` VALUES (1,'מוביל'),(2,'יומי'),(3,'שבועי');
/*!40000 ALTER TABLE `recipe_type_for_publish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reply` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdCommentForResponse` int DEFAULT NULL,
  `Likke` int DEFAULT NULL,
  `Date` date NOT NULL,
  `Text` varchar(500) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `20.Reply for Recipe_idx` (`IdRecipe`),
  KEY `21.Reply for User_idx` (`IdUser`),
  KEY `22.Reply for Reply(tt)_idx` (`IdCommentForResponse`),
  CONSTRAINT `20.Reply for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`),
  CONSTRAINT `21.Reply for User` FOREIGN KEY (`IdUser`) REFERENCES `user` (`Id`),
  CONSTRAINT `22.Reply for Reply(tt)` FOREIGN KEY (`IdCommentForResponse`) REFERENCES `reply` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES (5,12,10,NULL,0,'2002-02-02','אין על המתכון הזה!!!'),(6,20,10,NULL,6,'2002-02-02','אין על המתכון הזה!!!'),(7,20,10,NULL,4,'2002-02-02','כדאי להגיש קפוא זה יותר טעים'),(8,22,10,NULL,1,'2002-02-02','בתאבון!!');
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_recipe`
--

DROP TABLE IF EXISTS `status_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Status` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_recipe`
--

LOCK TABLES `status_recipe` WRITE;
/*!40000 ALTER TABLE `status_recipe` DISABLE KEYS */;
INSERT INTO `status_recipe` VALUES (1,'מחכה לפרסום'),(2,'פורסם'),(3,'לא פורסם'),(4,'לא לפרסום');
/*!40000 ALTER TABLE `status_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Mail` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `IdUserType` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `10.User for User type_idx` (`IdUserType`),
  CONSTRAINT `10.User for User type` FOREIGN KEY (`IdUserType`) REFERENCES `user_type` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'אבישג חברוני','avishag2065@gmail.com','2065',1),(2,'יעל בן זכאי','benzakayyael@gmail.com','477',1),(3,'חיה ברכה ברגה','chaya@gmail.com','1474',2),(4,'זוהרה ברקוביץ','zohara@gmail.com','6545',2),(5,'אהובה אלקריף','hauvael@gmail.com','9878',2),(6,'שרה עובד','sara@gmail.com','98489',2),(7,'פאצ\'וני','liel@gmail.com','545',2),(8,'ספיר עבאדי','sapir@gmail.com','5412',2),(9,'עדנה יזמיילוב','edna@gmail.com','95159',2),(10,'רות שעיבי','ruth@gmail.com','8455',2),(11,'הודיה נחום','hodaya@gmail.com','21542',2),(12,'שירה חדד','shira@gmail.com','2142',2),(13,'איולית','ayala@gmail.com','54152',2),(14,'מיכלא','michal@gmail.com','84852',2),(15,'שילת בעידני','shilat@gmail.com','5412583',2),(16,'סיוון סיונוב','sivan@gmail.com','21452',2),(17,'תמר לוי','tamar@gmail.com','95456',2),(18,'אורטל דיאמנט','ortal@gmail.com','147412',2),(19,'אפרת קבלן','efrat@gmail.com','84236',2),(20,'ישראל','israel@gmail.com','654565484',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'מנהל'),(2,'משתמש');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `value`
--

DROP TABLE IF EXISTS `value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `value` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `NameAtWritten` varchar(45) NOT NULL,
  `NameAtFraction` float NOT NULL,
  `NameAtNumber` float NOT NULL,
  `Picture` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `value`
--

LOCK TABLES `value` WRITE;
/*!40000 ALTER TABLE `value` DISABLE KEYS */;
/*!40000 ALTER TABLE `value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_for_recipe`
--

DROP TABLE IF EXISTS `video_for_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_for_recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdRecipe` int NOT NULL,
  `Video` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `14.Video for recipe for Recipe_idx` (`IdRecipe`),
  KEY `15.Video for recipe for Video_idx` (`Video`),
  CONSTRAINT `14.Video for recipe for Recipe` FOREIGN KEY (`IdRecipe`) REFERENCES `recipe` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_for_recipe`
--

LOCK TABLES `video_for_recipe` WRITE;
/*!40000 ALTER TABLE `video_for_recipe` DISABLE KEYS */;
INSERT INTO `video_for_recipe` VALUES (1,19,'[object Object]'),(2,19,'[object Object]'),(3,19,'[object Object]'),(4,19,'[object Object]'),(5,20,'[object Object]'),(6,20,'[object Object]'),(7,20,'[object Object]'),(8,20,'[object Object]'),(9,21,'[object Object]'),(10,21,'[object Object]'),(11,21,'[object Object]'),(12,21,'[object Object]'),(13,22,'[object Object]'),(14,22,'[object Object]'),(15,22,'[object Object]'),(16,22,'[object Object]'),(17,23,'[object Object]'),(18,23,'[object Object]'),(19,23,'[object Object]'),(20,23,'[object Object]'),(21,24,'[object Object]'),(22,24,'[object Object]'),(23,24,'[object Object]'),(24,24,'[object Object]'),(25,25,'[object Object]'),(26,25,'[object Object]'),(27,25,'[object Object]'),(28,25,'[object Object]'),(29,26,'[object Object]'),(30,26,'[object Object]'),(31,26,'[object Object]'),(32,26,'[object Object]'),(33,27,'[object Object]'),(34,27,'[object Object]'),(35,27,'[object Object]'),(36,27,'[object Object]'),(37,28,'[object Object]'),(38,28,'[object Object]'),(39,28,'[object Object]'),(40,28,'[object Object]'),(41,29,'[object Object]'),(42,29,'[object Object]'),(43,29,'[object Object]'),(44,29,'[object Object]'),(45,30,'[object Object]'),(46,30,'[object Object]'),(47,30,'[object Object]'),(48,30,'[object Object]'),(49,31,'[object Object]'),(50,31,'[object Object]'),(51,31,'[object Object]'),(52,31,'[object Object]'),(53,32,'[object Object]'),(54,32,'[object Object]'),(55,32,'[object Object]'),(56,32,'[object Object]'),(57,33,'[object Object]'),(58,33,'[object Object]'),(59,33,'[object Object]'),(60,33,'[object Object]'),(61,34,'[object Object]'),(62,34,'[object Object]'),(63,34,'[object Object]'),(64,34,'[object Object]');
/*!40000 ALTER TABLE `video_for_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weight_type`
--

DROP TABLE IF EXISTS `weight_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weight_type` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weight_type`
--

LOCK TABLES `weight_type` WRITE;
/*!40000 ALTER TABLE `weight_type` DISABLE KEYS */;
INSERT INTO `weight_type` VALUES (1,'גרם'),(2,'מיל'),(3,'קילו'),(4,'ליטר');
/*!40000 ALTER TABLE `weight_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-12 16:09:06
