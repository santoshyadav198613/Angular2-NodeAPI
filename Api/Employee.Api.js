var employeeApi = function (app) {
    var empList = [{ id: 1, name: 'Vikram', age: 34, address: 'Pune' },
    { id: 2, name: 'Kiran', age: 34, address: 'Pne' },
    { id: 3, name: 'Nilesh', age: 34, address: 'Pne' }];


    app.get('/api/employee', (req, res) => {
        //console.log('This is get Employee api');
        res.send(empList);
    });


    app.post('/api/employee', (req, res) => {
        var employee = req.body;
        empList.push(
            { id: 4, name: employee.name, age: employee.age, address: employee.address }
        );
        res.send(empList);
        console.log('This is post Employee api');
    });

};


module.exports = employeeApi;