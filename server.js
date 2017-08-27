var testModule = require('./test');
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer();
var fs = require('fs');
var bodyParser = require('body-parser');
var logger = require('./middleware/logger');
var employeeApi = require('./Api/Employee.Api');


app.use(logger);
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.get('/User', (req, res) => {
    console.log(req.url);
    fs.readFile('./sample.txt', (err, data) => {
        console.log(data);
    });
    var result = fs.readFileSync('sample.txt', 'utf8');
    fs.writeFileSync('output.txt', result);
    // console.log(result);
    res.end(result);
});

app.post('/User', (req, res) => {
    var user = { id: 1, name: 'test', address: 'test' };
    res.send(user);
});

employeeApi(app);

app.listen('3000', function () {
    console.log('server running on port 3000');
});
// server.on('request', (req, res) => {

//     console.log(req);
//     console.log(req.url);
//     if (req.url === '/User/1' && req.method === 'GET') {
//         res.end('Hello User');
//     }
//     if(req.url === '/User' && req.method === 'POST')
//     {

//     }
//     res.end('Hello World');
// }).listen(3000);

// server.listen('4040');


// console.log(http);

// console.log(testModule);

// var result = testModule.Add(4, 4);

// var emp = new testModule.Employee();

// console.log(result);

// console.log(emp);

