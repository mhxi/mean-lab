// POSTS RESOURCES

// Requirements
var express = require('express'),
	Post = require('../models/posts.js');

module.exports = function(app) {
	
	// INDEX
	app.get('/posts', function (req, res) {
		// GET ALL POSTS
		Post.find().sort('-created_at').exec(function (err, posts) {
			if (err) { return res.status(404).send(err); }
			res.send(posts);
		});
	});

	// CREATE
	app.post('/posts', function (req, res) {
		Post.create(req.body, function (err, post) {
			if (err) { return res.send(err); }
			console.log(post); //CHECK post
			res.status(201).send(post);
		});
	});

	// GET
	app.get('/posts/:post_id', function (req, res) {
		Post.findById(req.params.post_id, function (err, post) {
			if (err) { return res.status(404).send(err); }
			res.send(post);
		});
	});

	// UPDATE
	app.put('/posts/:post_id', function (req, res) {
		Post.findOneAndUpdate({ _id: req.params.post_id }, req.query.post, function (err, post) {
			if (err) { return res.send(err); }
			res.send(post);
		});
	});

	// DELETE
	app.delete('posts/:post_id', function (req, res) {
		Post.findByIdAndRemove(req.params.post_id, function (err, post) {
			if (err) { return res.send(err); }
			res.status(200).send('Success');
		});
	});

};