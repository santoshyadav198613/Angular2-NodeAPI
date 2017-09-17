var employeeApi = function (app, db, ObjectID) {
    
    app.get('/api/employee', (req, res) => {
        db.collection('employee').find().toArray(function (err, doc) {
            res.send(doc);
        })
    });

    app.get('/api/employee/:_id', (req, res) => {
        var objectId = new ObjectID(req.params._id);
        console.log(objectId);
        db.collection('employee').findOne(objectId).then(function (employees) {
            console.log(employees);
            res.send(employees);
        });
    });

    app.delete('/api/employee/', (req, res) => {
        var objectId = new ObjectID(req.body._id);
        console.log(objectId);
        db.collection('employee').deleteOne({
            _id: objectId
        }).then(function (result) {
            res.send(result);
        })
     });

    app.post('/api/employee', (req, res) => {
        console.log(req.body);
        db.collection('employee').insertOne(req.body, function (err, doc) {
            res.send(doc);
        })
    });

    app.put('/api/employee', (req, res) => {
        var objectId = new ObjectID(req.body._id);
        db.collection('employee').updateOne({
            _id: objectId
        }, {
            $set: {
                name: req.body.name,
                age: req.body.age,
                address: req.body.address
            }
        }).then(function (result) {
            res.send(result);
        })
    })
};

module.exports = employeeApi;