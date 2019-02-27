const express    = require('express'),
	  app        = express(),
	  bodyParser = require('body-parser'),
	  fs         = require('fs'),
	  fetch      = require('node-fetch'),
	  request    = require('request');

// Recipe Search 
// ID --> f29b4e9e
// Key --> 22a9efe3f46811bf723464d9893500ce
// Food DB API 
// Key --> 3d41eee85e7bfa68beda5ad8308c0df7	
// ID --> 67447426

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('port' ,process.env.PORT || 5000)

// ROUTES 

app.get('/', function(req, res){
	res.render("pages/index.ejs")

});

app.get('/', function(req, res){

})



app.post('/result', function(req, res){
	var searched = req.body.search;
	// console.log(req.body)
	var url = 'https://api.edamam.com/search?q=' + searched + '&app_id=f29b4e9e&app_key=22a9efe3f46811bf723464d9893500ce';
	// ajax.open('GET', 'https://api.yummly.com/v1/api/recipes?_app_id=2d78a357&_app_key=60d10df220acc4120e96411b7758e5ab&' + 'q='+ searched , true )
	request(url, { json: true }, (err, response, results) => {
	  if (err) { return console.log(err); }
	  	var data = results;
		res.render('pages/result.ejs', { data: results} )

	});

app.get('/recipe/')	

	

});








app.listen(process.env.PORT);
console.log('Server Started')