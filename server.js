// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 8080;

//Use express
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
// Here we start our server so that it can begin listening to client requests.

// variables for tables and reserve
// var customers = [];
var tables = [];
var waitlist = [];
const MAX_TABLES = 5;

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/tables", function(req, res) {
	if(tables.length < MAX_TABLES) {
		tables.push(newCustomer);
	} else {
		waitlist.push(newCustomer);
	}
  	console.log(tables);
  	console.log(waitlist);
	// We then display the JSON to the users
	res.json(tables);
})

app.post("/api/reserve", function(req, res) {
  // We then display the JSON to the users
  res.json(waitlist);
});

server.listen(PORT, function() {
  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);
});