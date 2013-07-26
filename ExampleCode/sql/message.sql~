/* Vasilisa Piyasheva, 1104586, Creating tables for Message, Inbox, Sent and Deleted messages, using SQL
Reference: Steve Jones blog example, COMP233 notes/assignments, 2011*/

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";



CREATE TABLE IF NOT EXISTS `message` (
  `to` varchar(25) NOT NULL default '',
  `from` varchar(25) NOT NULL default '',
  `subject` varchar(50) default NULL,
  `dateReceived` datetime NULL,
  `dateSent` datetime NULL,
  `body` varchar(6000) default NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `inbox` (
  `id` varchar(3) NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `sent` (
  `id` varchar(3) NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `deleted` (
  `id` varchar(3) NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


/* Physically inserting values into the table message*/
INSERT INTO `message` ( `id`, `to`, `from`, `subject`, `dateReceived`, `dateSent`, `body`) VALUES
('1', 'vp33', 'Steve', 'Hello Steve', '2011-02-13 11:11:11', '2011-02-13 11:11:11', 'Testing COMP333 email application.'),
('2', 'vp33', 'Bob', 'Recent bluefish...', '2011-03-01 20:23:19', '2011-03-01 20:23:19', 'Auto-complete tagging is extremely annoying.'),
('3', 'vp33', 'Admin', 'Edit please', '2011-04-15 18:05:15', '2011-04-15 18:05:15', 'Created a post, but unable to edit it, could you please delete it.'),
('4', 'user', 'vp33', 'cant find feature', '2011-09-11 10:45:00', '2011-09-11 10:45:00', 'Been looking for it for ages, somebody help please?'),
('5', 'vp33', 'Steve', 'programming?', '2011-05-13 00:05:00', '2011-05-13 00:05:00', 'Anybody up to some programming party? I am currently in lab 6.'),
('6', 'Bob', 'vp33', 'last night', '2011-07-13 12:52:48', '2011-07-13 12:52:48', 'Stayed up last night, just listening to music.....');

/*Inserting id values into inbox table*/
INSERT INTO `inbox` ( `id`) VALUES
('1'),
('2'),
('3');

/*Inserting id values into sent table*/
INSERT INTO `sent` ( `id`) VALUES
('4'),
('6');

/*Inserting id values into inbox table*/
INSERT INTO `deleted` ( `id`) VALUES
('5');


