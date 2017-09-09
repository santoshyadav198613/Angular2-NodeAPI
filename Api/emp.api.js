var empAPI = function(app) {

    var empList = [
        {id:1, name:'Test', add:'Pune'},
        {id:2, name:'Tess', add:'Pune'},
        {id:3, name:'Tesr', add:'Pune'}
    ];

    app.get('/api/employee', (req,res)=>{
        console.log('GET API');
        res.send(empList);
    });
    app.post('/api/employee', (req,res)=>{
        console.log('POST API');
        empList.push(
            {id:4, name:'Tesq', add:'Pune'}
        )
        res.send(empList);
    });
}
module.exports = empAPI;