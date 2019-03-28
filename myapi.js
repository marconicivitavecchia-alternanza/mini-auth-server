var http = require('http');
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());


var users = [{name:'luigi',password:'luigi'},{name:'giovanni',password:'giovanni'}];

app.use(express['static'](__dirname ));

// Express route for incoming requests for a customer name
app.get('/login', function(req, res) {
	let myres = {status: 'not found'};
	console.log(`auth: ${req.query.auth}`);
	users.forEach((user)=>{
		let auth = new Buffer(user.name + user.password).toString("base64");
		console.log(`${user.name}: ${auth}`);
		if (auth === req.query.auth) {
			myres = {status: 'ok'};
		}
	});
	res.status(200).send(myres);
}); 

// Express route for any other unrecognised incoming requests
app.get('*', function(req, res) {
	res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send('Oops, Something went wrong!');
	} else {
		next(err);
	}
});

app.listen(3000);
console.log('App Server running at port 3000');
