var productApi = function (app, db, ObjectID) {
    
        app.get('/api/product', (req, res) => {
            db.collection('product').find().toArray(function (err, doc) {
                res.send(doc);
            })
        });
    
        app.get('/api/product/:_id', (req, res) => {
            var objectId = new ObjectID(req.params._id);
            console.log(objectId);
            db.collection('product').findOne(objectId).then(function (product) {
                console.log(product);
                res.send(product);
            });
        });
    
        app.post('/api/product', (req, res) => {
            console.log(req.body);
            db.collection('product').insertOne(req.body, function (err, doc) {
                res.send(doc);
            })
        });
    
        app.put('/api/product', (req, res) => {
            var objectId = new ObjectID(req.body._id);
            db.collection('product').updateOne(
                { _id: objectId },
                {
                    $set: {
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price
                    }
                }).then(function (result) {
                    res.send(result);
                })
        })
    };
    
    
    module.exports = productApi;