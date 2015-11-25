var sql = require('mssql'); 
var express = require('express');
var app = express();

app.use(express.static("public"));
app.use(express.static("bower_components"));

app.get('/', function (req, res) {
  //console.dir(req);
  res.send('index.html');
});

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('index.html');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// will match requests to /about
app.get('/about', function (req, res) {
  res.send('about page');
});

// will match request to /random.text
app.get('/random.text', function (req, res) {
  res.send('random.text');
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

app.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    console.log('in the function body!');
  res.send('Hello from B!');
});




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});







//NODE MSSQL integrations below
/*
var config = {
    user: '',
    password: '',
    server: 'localhost',
    //port: '8888', // You can use 'localhost\\instance' to connect to named instance 
    database: 'AppInsight',
    options: {
        encrypt: false // Use this if you're on Windows Azure 
    }
}
 
sql.connect(config, function(err) {
    // ... error checks 
    if(!err){
        // Query 
        var request = new sql.Request();
        request.query('SELECT * FROM dbo.AppInsight', function(err, recordset) {
            // ... error checks 
            if(!err){
                console.dir(recordset);
            } else {
                console.dir("request error: " + err);
            }
        });

    } else {

        console.dir(err);
    
    }

    // Stored Procedure 
    var request = new sql.Request();
    request.input('input_parameter', sql.Int, value);
    request.output('output_parameter', sql.VarChar(50));
    request.execute('procedure_name', function(err, recordsets, returnValue) {
        // ... error checks 
         console.dir(recordsets);
    });
});
*/