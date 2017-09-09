var orderApi = function (app) {
    var orders = [
        { id: 1,  customer: 'vikramwali', product: 1, quantity: 1, price: 2000},
        { id: 2,  customer: 'nitinkamble', product: 2, quantity: 2 , price: 4000},
        { id: 3,  customer: 'nileshzare', product: 1, quantity: 1, price: 4000},
    ];


    app.get('/api/order', (req, res) => { 
        res.send(orders);
    });


    app.post('/api/order', (req, res) => {
        orders.push(
             { id: 4, customer: 'kirandesh', product: 3, quantity: 1 , price: 2000} 
        );
        res.send(orders);
        console.log('This is post order api');
    });

};


module.exports = orderApi;