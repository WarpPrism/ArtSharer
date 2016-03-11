var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userSignUp = function(email, password, req, res) {
	mongoose.model('User').find({ 'email' : email }, function(err, users) {
		if (err) {
			return console.log(err);
		} else {
			if (users.length) {
				console.log('user exist!');
				res.redirect('/sign_in');
			} else {
				mongoose.model('User').create({
					'username' : '',
					'password' : password,
					'description' : '',
					'email' : email,
					'artworks' : [],
					'followers' : [],
					'starArtists' : [],
					'starWorks' : []
				}, function(err, user) {
					if (err) {
						res.send('There was a problem adding the information to the database.');
					} else {
						console.log('sign up succeed!');
						res.redirect('/sign_in');
					}
				});
			}
		}
	});
}

var userSignIn = function(email, password, req, res) {
	mongoose.model('User').find(
	{
		'email' : email,
		'password' : password
	}, function(err, users) {
		if (err) {
			console.log(err);
		} else {
			if (!users.length) {
				console.log('sign in fail!');
				res.redirect('/sign_in');
			} else {
				console.log('sign in succeed!');
				res.redirect('/sign_in');
			}
		}
	});
}

var deleteUser = function(email, req, res) {
	mongoose.model('User').find({ 'email' : email }, function(err, users) {
		if (err) {
			return console.log(err);
		} else {
			if (!users.length) {
				console.log('user not exist!');
				res.redirect('/sign_in');
			} else {
				mongoose.model('User').findOne({ 'email' : email }, function(err, user) {
					if (err) {
						console.log(err);
					} else {
						user.remove(function(err, blob) {
							if (err) {
								console.log(err);
							} else {
								console.log('deletion succeed!');
								res.redirect('/sign_in');
							}
						});
					}
				});
			}
		}
	});
}

var updateUser = function(userModify, req, res) {
	mongoose.model('User').find({ 'email' : userModify.email }, function(err, users) {
		if (err) {
			return console.log(err);
		} else {
			if (!users.length) {
				console.log('user not exist!');
				res.redirect('/sign_in');
			} else {
				mongoose.model('User').findOne({ 'email' : userModify.email }, function(err, user) {
					if (err) {
						console.log(err);
					} else {
						user.update({
							'username' : userModify.username,
							'password' : userModify.password,
							'description' : userModify.descript,
							'email' : userModify.email,
							'artworks' : userModify.artworks,
							'followers' : userModify.followers,
							'starArtists' : userModify.starArtists,
							'starWorks' : userModify.starWorks
						}, function(err, user) {
							if (err) {
								console.log(err);
							} else {
								console.log('update succeed!');
								res.redirect('/sign_in');
							}
						});
					}
				});
			}
		}
	});
}

exports.showSignIn = function(req, res) {
	res.render("signin");
}

exports.handleSignIn = function(req, res) {    //cookies之类的怎么弄
	var email = req.body.email;
	var password = req.body.password;
	userSignIn(email, password, req, res);
}

exports.handleSignUp = function(req, res) {    //注册之后的跳转页面是啥？
	var email = req.body.email;
	var password = req.body.password;
	userSignUp(email, password, req, res);
}

exports.handleUpdate = function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	var userModify = {
		'username' : 'rice',
		'password' : '11111111',
		'descript' : 'fantuan',
		'email' : '1@1.com',
		'artworks' : [1, 2],
		'followers' : ['rice', 'xwz'],
		'starArtists' : ['rice', 'xwz'],
		'starWorks' : [1, 2]
	};
	updateUser(userModify, req, res);	
}

exports.handleDelete = function(req, res) {
	var email = req.body.email;
	deleteUser(email, req, res);
}