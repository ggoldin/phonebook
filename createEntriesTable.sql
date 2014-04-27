--
-- Struttura della tabella `entries`
--

CREATE TABLE IF NOT EXISTS `entries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `lastname` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;
