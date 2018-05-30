/*var express = require('express');

var app = express();
app.use('/', express.static('public'));

app.get('/menu', function(request, response){     // /menu is url
	response.sendFile(__dirname + "/data/menu.json");

	//we can read database & prepare saome data and send json
	//response.send("Hello.. I am ,menu handler";)
});

var server = app.listen(3000, function(){
	console.log('server started at port 3000');
});*/

var gulp = require('gulp');
var dust = require('gulp-dust'); 

var express = require('express');

var app = express();
app.use('/', express.static('public'));

app.get('/menu', function(request, response){     // /menu is url
	response.sendFile(__dirname + "/data/menu.json");
});

gulp.task('dust', function () {
	console.log('dust..');
	gulp.src('public/dust/*.js')  //we can put html file here too, just change the extension to html from dust in public/js folder
		.pipe(dust())
		.pipe(gulp.dest('public/js'));
});



gulp.task('server', function(){
	console.log("server....");
	var server = app.listen(3000, function(){
		console.log('server started at port 3000')
	});
})


gulp.task('default', ['dust', 'server']);

