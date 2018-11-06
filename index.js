const express    = require('express'),
	  app        = express(),
	  bodyParser = require('body-parser'),
	  mongoose   = require('mongoose'),
	  fs         = require('fs'),
	  fetch      = require('node-fetch'),
	  request    = require('request');



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));



//  connnection to DB
mongoose.connect('mongodb://localhost/recipe_app' );


// Schema 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ingredientSchema = new Schema({
	name: String
})

// Model

const ingredient = mongoose.model('ingredient', ingredientSchema);

// ingredients.f

// ROUTES 

app.get('/', function(req, res){

	res.render("pages/index.ejs")
});



app.post('/result', function(req, res){
	var searched = req.body.search;
	var ingredients = [];
	var url = 'https://api.yummly.com/v1/api/recipes?_app_id=2d78a357&_app_key=60d10df220acc4120e96411b7758e5ab&' + 'q='+ searched ;
	request(url, { json: true }, (err, response, results) => {
	  if (err) { return console.log(err); }
	  	var data = results;
		res.render('pages/result.ejs', { data: results} )

	});

	

});








app.listen(5000);
console.log('5000 is the magic port')