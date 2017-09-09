var productApi = function (app) {
  var products = [
        { id: 1, name: 'LED TV', description: '32 inch HD diaplay', price: 2000, qty: 1, imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg' },
        { id: 2, name: 'Refigerator', description: 'Refigerator double door', price: 4000, qty: 1, imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg' },
        { id: 3, name: 'Air Condition', description: '1.5 ton', price: 5000, qty: 1, imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg' }
    ];  


    app.get('/api/product', (req, res) => {
        //console.log('This is get product api');
        res.send(products);
    });


    app.get('/api/product/:id', (req, res) => {
        var id = parseInt(req.params.id);
        var result = products.filter((data) => data.id === id);
        res.send(result);
    });


    app.post('/api/product', (req, res) => {
        var product = req.body;
        products.push(
            { id: 4, name: product.name, description: product.description, price: product.price, qty: 1, imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg' }
        );
        res.send(products);

    });

};


module.exports = productApi;