/*
Navicat MySQL Data Transfer

Source Server         : Gene
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : html_1805

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-03 19:32:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for football
-- ----------------------------
DROP TABLE IF EXISTS `football`;
CREATE TABLE `football` (
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of football
-- ----------------------------
INSERT INTO `football` VALUES ('申方�?', '观众朋友们，球迷朋友们！大家晚上好，欢迎收看风云足球频道，现在我们为您带来的是一场宇宙足球甲级联赛的直播，是由拜仁慕尼黑迎战巴塞罗那的比赛！ ');
INSERT INTO `football` VALUES ('韩乔�?', '随着守门员的一声哨响，比赛开始了！�?');
INSERT INTO `football` VALUES ('张路', '嘿嘿 ');
INSERT INTO `football` VALUES ('宫磊', '如果这场比赛巴萨能获胜，那么他们将在客场全取三分，然后带着优势回到自己的主场伯纳乌！�?');
INSERT INTO `football` VALUES ('段暄', '巴萨逼太紧，拜仁插不进去。�?');
INSERT INTO `football` VALUES ('刘建�?', '看这球！比利亚打门！球打在门柱上！再打！球又打在门柱上！再补！球进啦！进啦进啦进啦！ ');
INSERT INTO `football` VALUES ('陶伟', '哎哟，你看，这又是巴德斯图贝尔啊！�?');
INSERT INTO `football` VALUES ('刘嘉�?', '拜仁这下可麻烦啦！！！！！！！！ ');
INSERT INTO `football` VALUES ('邵圣�?', '拜仁这么打下去可不是办法啊！ ');
INSERT INTO `football` VALUES ('张路', '嘿嘿！�?');
INSERT INTO `football` VALUES ('黄子�?', '拜仁打多特猛德都费劲，更何况兵强马壮的巴塞罗那！ ');
INSERT INTO `football` VALUES ('贺炜', '你的对手强大并不一定意味着恐惧，人最感到恐惧的是对未知的恐惧。�?');
INSERT INTO `football` VALUES ('陶伟', '我还是支持拜仁慕尼黑！�?');
INSERT INTO `football` VALUES ('申方�?', '哎哟！！！这个动作要吃牌啊！布茨克斯这直接奔人去了，这一下下去戈麦斯得死掉多少脑细胞啊！ ');
INSERT INTO `football` VALUES ('徐阳', '布茨克斯是个老实孩子');
INSERT INTO `football` VALUES ('陶伟', '这球布茨克斯主要还是太想发力！lian续对隔麦斯犯规啊！�?');
INSERT INTO `football` VALUES ('张路', '嘿嘿！�?');
INSERT INTO `football` VALUES ('刘建�?', '看这球！进去了！危险！罗本！罗本！还在带，还在带！哦不，这是里贝里！ ');
INSERT INTO `football` VALUES ('段暄', '啊~~~~啊~~~~啊~~~~~~里贝里~~~~啊~~~~打门！！！！啊！！哈哈哈哈哈哈！！！！！！！！！！！！�?');
INSERT INTO `football` VALUES ('刘嘉�?', '这球进去了！ ');
INSERT INTO `football` VALUES ('申方�?', '哎哟！拜仁慕尼黑不容易啊~！�?');
INSERT INTO `football` VALUES ('贺炜', '好球啊！里贝里这下过人之后的打门难度很大啊，因为很难！�?');
INSERT INTO `football` VALUES ('徐阳', '这球里贝里突破的时候，好像推倒了布茨克斯啊！布茨克斯是个老实孩子！�?');
INSERT INTO `football` VALUES ('陶伟', '什么是球星，这就是球星！�?');
INSERT INTO `football` VALUES ('张路', '嘿嘿！�?');
INSERT INTO `football` VALUES ('韩乔�?', '随着主教练的一声哨响，上半场比赛结束了，国际米兰和皇家马德里为我们奉献了一场高质量的上半场比赛！不过主裁判也有几个误判，双方守门员多次在禁区内手球，而且还走步，如果主裁判能提高执法水平，这场比赛将更加完美！下面是广告时间，马上走开，不要回来！  ');
INSERT INTO `football` VALUES ('申方剑老师', '主要解说德甲，语言很风趣幽默：放几个语录 诺伊尔的睫毛真长啊；�?');
INSERT INTO `football` VALUES ('申方�?', '不知道我这么说大家听明白了吗 ');
INSERT INTO `football` VALUES ('徐阳', '反正我是没大听明白； 戈麦斯两条大长腿摆啊摆 有个游戏叫“英雄萨姆”，希望萨姆也可以英勇一点！');

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `score` int(3) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES ('1', 'lemon', '92', '2018-09-03 19:19:56');
INSERT INTO `score` VALUES ('2', 'laoxie', '60', '2018-09-03 19:19:56');
INSERT INTO `score` VALUES ('3', 'tt', '96', '2018-09-03 19:19:56');
INSERT INTO `score` VALUES ('4', 'xm', '16', '2018-09-03 19:19:56');
INSERT INTO `score` VALUES ('5', 'xh', '66', '2018-09-03 19:19:56');
INSERT INTO `score` VALUES ('6', 'gj', '92', '2018-09-03 19:19:56');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT COMMENT '表的唯一标识',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `reg_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'gene', '666666', '18', '2018-09-03 17:06:05');
SET FOREIGN_KEY_CHECKS=1;
