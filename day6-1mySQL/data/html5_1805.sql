/*
Navicat MySQL Data Transfer

Source Server         : laoxie
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : html5_1805

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-03 10:19:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `score` varchar(255) DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES ('1', 'lemon', '92', '2018-09-03 10:13:10');
INSERT INTO `score` VALUES ('2', 'laoxie', '60', '2018-09-03 10:13:10');
INSERT INTO `score` VALUES ('3', 'tt', '96', '2018-09-03 10:13:10');
INSERT INTO `score` VALUES ('4', 'xm', '16', '2018-09-03 10:13:10');
INSERT INTO `score` VALUES ('5', 'xh', '66', '2018-09-03 10:13:10');
INSERT INTO `score` VALUES ('6', 'gj', '92', '2018-09-03 10:13:10');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT COMMENT '表的唯一标识',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'laoxie', '123456', '18', '2018-09-03 10:03:35');
INSERT INTO `user` VALUES ('3', 'tiantian', '1234', '28', '2018-09-03 10:06:57');

-- ----------------------------
-- Table structure for weibo
-- ----------------------------
DROP TABLE IF EXISTS `weibo`;
CREATE TABLE `weibo` (
  `id` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `comtcnt` varchar(255) DEFAULT NULL,
  `likecnt` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weibo
-- ----------------------------
INSERT INTO `weibo` VALUES ('1', '小明10年前背井离乡，家乡人从此再也喝不到井水�?', '50', '118', 'laoxie');
INSERT INTO `weibo` VALUES ('2', 'VANS万斯官方大促专场', '50', '103', 'assafasd');
INSERT INTO `weibo` VALUES ('3', '请说三条支撑你活下去的理由？因为我胡三六条，可是六条被人杠了…�?', '95', '300', '福尔蘑菇');
INSERT INTO `weibo` VALUES ('4', '有一只狼宝宝噢，它一 生下来不吃肉只吃素，它父母很担心啊。结果一天看到狼宝宝追一只兔子啦，父母很欣慰。然后狼宝宝抓住兔子说：把胡萝卜交出来！…�?', '3', '26', '小窝');
INSERT INTO `weibo` VALUES ('5', '从前有个捉迷藏社团， 他们的社长直到现在还没找到�?', '0', '8', '煎饼�?');
INSERT INTO `weibo` VALUES ('6', '哎呀', '10', '73', 'tiantian');
SET FOREIGN_KEY_CHECKS=1;
