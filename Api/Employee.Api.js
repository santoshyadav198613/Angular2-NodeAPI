var employeeApi = function (app) {
    var emplList = [{ id: 1, name: 'Test1', age: 34, address: 'pune' },
    { id: 2, name: 'Test2', age: 35, address: 'pune' },
    { id: 3, name: 'Test3', age: 36, address: 'pune' }];

    app.get('/api/employee', (req, res) => {
        res.send(emplList);
    });
    app.post('/api/employee', (req, res) => {
        emplList.push(
            { id: 4, name: 'Test4', age: 37, address: 'pune' }
        );
        res.send(emplList);
        console.log('This is post api for employee');
    });

};

module.exports = employeeApi;