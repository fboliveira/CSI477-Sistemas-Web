-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/10/2018 às 08:10
-- Versão do servidor: 5.7.22
-- Versão do PHP: 7.1.16

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

CREATE DATABASE IF NOT EXISTS `academico` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;

/* DROP USER `sistemaweb`@`localhost`; */

CREATE USER `sistemaweb`@`localhost` identified by "123456";
GRANT ALL PRIVILEGES ON academico.* TO `sistemaweb`@`localhost`;

USE academico;

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

DROP TABLE IF EXISTS `alunos`;
CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rua` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `numero` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `bairro` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `cidade_id` int(10) UNSIGNED NOT NULL,
  `cep` varchar(8) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alunos_cidade_id_foreign` (`cidade_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cidades`
--

DROP TABLE IF EXISTS `cidades`;
CREATE TABLE IF NOT EXISTS `cidades` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cidades_estado_id_foreign` (`estado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `estados`
--

DROP TABLE IF EXISTS `estados`;
CREATE TABLE IF NOT EXISTS `estados` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sigla` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `alunos`
--
ALTER TABLE `alunos`
  ADD CONSTRAINT `alunos_cidade_id_foreign` FOREIGN KEY (`cidade_id`) REFERENCES `cidades` (`id`);

--
-- Restrições para tabelas `cidades`
--
ALTER TABLE `cidades`
  ADD CONSTRAINT `cidades_estado_id_foreign` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`);

-- --------------------------------------------------------

--
-- INSERCAO DOS DADOS
--

-- estados

INSERT INTO `estados` (id, nome, sigla) VALUES
(1, 'Acre', 'AC'),
(2, 'Alagoas', 'AL'),
(3, 'Amapá', 'AP'),
(4, 'Amazonas', 'AM'),
(5, 'Bahia', 'BA'),
(6, 'Ceará', 'CE'),
(7, 'Distrito Federal', 'DF'),
(8, 'Espírito Santo', 'ES'),
(9, 'Goiás', 'GO'),
(10, 'Maranhão', 'MA'),
(11, 'Mato Grosso', 'MT'),
(12, 'Mato Grosso do Sul', 'MS'),
(13, 'Minas Gerais', 'MG'),
(14, 'Pará', 'PA'),
(15, 'Paraíba', 'PB'),
(16, 'Paraná', 'PR'),
(17, 'Pernambuco', 'PE'),
(18, 'Piauí', 'PI'),
(19, 'Rio de Janeiro', 'RJ'),
(20, 'Rio Grande do Norte', 'RN'),
(21, 'Rio Grande do Sul', 'RS'),
(22, 'Rondônia', 'RO'),
(23, 'Roraima', 'RR'),
(24, 'Santa Catarina', 'SC'),
(25, 'São Paulo', 'SP'),
(26, 'Sergipe', 'SE'),
(27, 'Tocantins', 'TO');

-- CIDADES

--
-- Dumping data for table `cidades`
--

INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(114, 'Macae', 19);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(269, 'Guaraciaba', 24);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(317, 'Lontras', 24);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(498, 'Araraquara', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(544, 'Boraceia', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(546, 'Borebi', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(554, 'Buritama', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(599, 'Conchal', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(624, 'Dumont', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(752, 'Joanopolis', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(804, 'Mirassol', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(820, 'Morro Agudo', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(823, 'Murutinga do Sul', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(845, 'Oleo', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(880, 'Pedregulho', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(906, 'Planalto', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(950, 'Ribeirao do Sul', 25);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1119, 'Alagoa', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1208, 'Buritizeiro', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1270, 'Cascalho Rico', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1281, 'Chacara', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1295, 'Conceicao da Barra de Minas', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1333, 'Cristina', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1377, 'Esmeraldas', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1583, 'Matozinhos', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1608, 'Montes Claros', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1711, 'Planura', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1890, 'Serra da Saudade', 13);
INSERT INTO `cidades` (`id`, `nome`, `estado_id`) VALUES(1941, 'Vargem Grande do Rio Pardo', 13);

-- ALUNOS

INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(1, 'Maria Silva', '', '', '', 1295, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(2, 'José Santos', '', '', '', 1119, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(3, 'Antônio Oliveira', '', '', '', 1711, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(4, 'João Souza', '', '', '', 1281, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(5, 'Francisco Pereira', '', '', '', 1270, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(6, 'Ana Costela', '', '', '', 546, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(7, 'Luiz Carvalho', '', '', '', 880, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(8, 'Paulo Almeida', '', '', '', 804, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(9, 'Carlos Ferreira', '', '', '', 1377, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(10, 'Manoel Ribeiro', '', '', '', 554, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(11, 'Pedro Rodrigues', '', '', '', 599, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(12, 'Francisca Gomes', '', '', '', 1333, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(13, 'Marcos Lima', '', '', '', 950, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(14, 'Raimundo Martins', '', '', '', 752, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(15, 'Sebastião Rocha', '', '', '', 906, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(16, 'Antônia Alves', '', '', '', 317, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(17, 'Marcelo Araújo', '', '', '', 823, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(18, 'Jorge Xavier', '', '', '', 1208, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(19, 'Márcia Barbosa', '', '', '', 1608, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(20, 'Geraldo Castro', '', '', '', 498, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(21, 'Adriana Fernandes', '', '', '', 1583, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(22, 'Sandra Melo', '', '', '', 544, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(23, 'Luis Azevedo', '', '', '', 1890, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(24, 'Fernando Barros', '', '', '', 1941, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(25, 'Fabio Cardoso', '', '', '', 114, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(26, 'Roberto Correia', '', '', '', 624, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(27, 'Márcio Cunha', '', '', '', 820, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(28, 'Edson Dias', '', '', '', 269, '', '');
INSERT INTO `alunos` (`id`, `nome`, `rua`, `numero`, `bairro`, `cidade_id`, `cep`, `mail`) VALUES(29, 'André Mesquita', '', '', '', 845, '', '');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
