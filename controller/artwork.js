var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



exports.handleCreate = function(req, res) {    //这里要看一下文件存储怎么弄，url怎么生成
	var workTitle = req.body.workTitle;
	var author = req.body.author;
	var url = '#';
	var isFork = false;
	var forkFrom = null;
	var createTime = new Date();
	var lastModified = new Date();
	var tags = [];

	var newArtWork = {
		'workId' : 1,
		'workTitle' : workTitle,
		'author' : author,
		'isFork' : isFork,
		'forkFrom' : forkFrom,
		'url' : url,
		'createTime' : createTime,
		'lastModified' : lastModified,
		'tags' : tags
	};
	createWork(newArtWork, req, res);
}

exports.handleDelete = function(req, res) {
	var workTitle = req.body.workTitle;
	var author = req.body.author;
	deleteWork(workTitle, author, req, res);
}

exports.handleUpdate = function(req, res) {    //这里要看一下更新是不是可以更新部分项
	var workTitle = req.body.workTitle;
	var author = req.body.author;
	var url = '#';
	var isFork = false;
	var forkFrom = null;
	var createTime = new Date();
	var lastModified = new Date();
	var tags = [];

	var newArtWork = {
		'workId' : 1,
		'workTitle' : workTitle,
		'author' : author,
		'isFork' : isFork,
		'forkFrom' : forkFrom,
		'url' : url,
		'createTime' : createTime,
		'lastModified' : lastModified,
		'tags' : tags
	};
	createWork(newArtWork, req, res);
}

exports.handleQuery = function(req, res) {    //查询之后的结果是怎么返回的？

}