var testModule = require('./test.js');
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer();
var fs = require('fs');
var bodyParser = require('body-parser');
var logger = require('./middleware/logger');
var employeeApi = require('./api/Employee.Api');
var productApi = require('./api/Product.Api');
var customerApi = require('./api/Customer.Api');
var orderApi = require('./api/Order.Api');



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(logger);
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.get('/User', (req, res) => {

    console.log(req.url);
    console.log("Inside Get Method");
    fs.readFile('./sample.txt', (err, data) => {
        console.log(data);
    });
    var result = fs.readFileSync('sample.txt', 'utf8');
    fs.writeFileSync('output.txt', result);

    //console.log(result);
    res.end(result);
});

app.post('/User', (req, res) => {
    var user = { id: 1, name: 'Vikram', address: 'Pimple' };
    console.log(req.url);
    res.send(user);
});


employeeApi(app);
productApi(app);
customerApi(app);
orderApi(app);


app.listen('3000', function () {
    console.log("Running on 3000 port");
});

// server.on('request', (req, res) => {
//     console.log(req);
//     console.log(req.url);
//     if(req.url === '/User/1' && req.method === 'GET'){
//         res.end("Hello User");
//     }
//     res.end("Hello");
// }).listen('3000');

//server.listen('4040');

// console.log(http);

// console.log(testModule);


// var result =  testModule.Add(9,9);
// var emp =  new testModule.Employee();

// console.log(result);
// console.log(emp);