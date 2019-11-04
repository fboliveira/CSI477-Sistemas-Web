SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de Dados: `academico`
--

CREATE DATABASE IF NOT EXISTS `academico` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

/* DROP USER `sistemaweb`@`localhost`; */

CREATE USER `sistemaweb`@`localhost` identified by "123456";
GRANT ALL PRIVILEGES ON academico.* TO `sistemaweb`@`localhost`;

USE academico;

-- --------------------------------------------------------

--
-- Estrutura para tabela `estados`
--

DROP TABLE IF EXISTS `estados`;
CREATE TABLE IF NOT EXISTS `estados` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sigla` varchar(2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- --------------------------------------------------------

--
-- INSERCAO DOS DADOS
--

-- estados

INSERT INTO `estados` (id, nome, sigla) VALUES
(1, 'Distrito Federal', 'DF'),
(2, 'Espírito Santo', 'ES'),
(3, 'Goiás', 'GO'),
(4, 'Minas Gerais', 'MG'),
(5, 'Pernambuco', 'PE'),
(6, 'Rio de Janeiro', 'RJ'),
(7, 'Rio Grande do Norte', 'RN'),
(8, 'Rio Grande do Sul', 'RS'),
(9, 'Santa Catarina', 'SC'),
(10, 'São Paulo', 'SP'),
(11, 'Sergipe', 'SE'),
(12, 'Tocantins', 'TO');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
