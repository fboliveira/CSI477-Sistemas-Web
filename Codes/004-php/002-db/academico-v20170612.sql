--
-- Banco de Dados: `academico`
--

DROP DATABASE IF EXISTS academico;
CREATE DATABASE  `academico` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;

/* DROP USER `sistemaweb`@`localhost`; */

CREATE USER `sistemaweb`@`localhost` identified by "123456";
GRANT ALL PRIVILEGES ON academico.* TO `sistemaweb`@`localhost`;

USE academico;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estados`
--
DROP TABLE IF EXISTS `notas`;
DROP TABLE IF EXISTS `alunos`;
DROP TABLE IF EXISTS `usuarios`;
DROP TABLE IF EXISTS `cidades`;
DROP TABLE IF EXISTS `estados`;

CREATE TABLE `estados` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) COLLATE latin1_general_ci NOT NULL,
  `sigla` varchar(2) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cidade`
--

CREATE TABLE IF NOT EXISTS `cidades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `estado_id` smallint(6) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `estado_id` (`estado_id`),
  CONSTRAINT `cidades_estado` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `rua` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `numero` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `bairro` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `cidade_id` int(11) NOT NULL,
  `cep` varchar(8) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (cidade_id) REFERENCES cidades(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE  TABLE `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NULL ,
  `login` VARCHAR(20) NULL ,
  `senha` VARCHAR(32) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `notas`
--

CREATE TABLE `notas` (
  `ano` smallint(6) NOT NULL,
  `semestre` smallint(6) NOT NULL,
  `aluno_id` int(11) NOT NULL,
  `nota1` decimal(5,2) DEFAULT NULL,
  `nota2` decimal(5,2) DEFAULT NULL,
  `nota3` decimal(5,2) DEFAULT NULL,
  `aprovado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ano`,`semestre`,`aluno_id`),
  KEY `aluno_id` (`aluno_id`),
  CONSTRAINT `aluno_id` FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- INSERCAO DOS DADOS
--

-- usuarios

INSERT into usuarios VALUES (1, 'Administrador', 'admin', md5('admin'));
INSERT into usuarios VALUES (2, 'Secretaria', 'secretaria', md5('secretaria'));
INSERT into usuarios VALUES (3, 'Coordenador', 'coordenador', md5('coordenador'));

-- estados

INSERT INTO `estados` VALUES
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