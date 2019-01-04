var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var marked = require('marked');

app.use(express.static('blogs'));
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "X-Requested-With");
	// res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By",' 3.2.1')
	// res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// 获取文章清单
app.get('/blogs/coding', function(req, res) {
	var posts = [];

	console.log('server is running at port 8080');
	fs.readdir('./blogs/', function(err, files) {
		if(err) {
			console.error(err);
		}
		for(var i = 0; i < files.length; i++) {
			posts.push({
				'title': path.basename(files[i], '.md'),
				'datetime': fs.statSync('./blogs/' + files[i]).mtime
			})
		}
		posts.sort(function(a, b) {
			return b.datetime - a.datetime
		});
		res.send(posts);
	})

});

// 获取文章明细
app.get('/post/', function(req, res) {
	var post = {
		'Mtime': '',
		'content': ''
	};

	fs.readFile('./blogs/' + req.query.file, 'utf-8', function(err, data) {
		if(err) {
			console.error(err);
		}
		post.content = marked(data);
		fs.stat('./blogs/' + req.query.file, function(err, stats) {
			if(err) throw err;
			post.Mtime = stats.mtime;
			res.send(post);
		});
	});

});

app.listen(8081);
console.log("8081 start");