var customerApi = function (app) {
    var customers = [
        { id: 1, name: 'vikram', username: 'vikramwali', mobile: '9168910690', email: 'v@gmail.com', addressLine1: 'Maharashtra', addressLine2: 'Sangli',city:'Jath',zip:'416111' },
        { id: 2, name: 'nitin', username: 'nitinkamble', email: 'n1@gmail.com', addressLine1: 'Maharashtra', addressLine2: 'Sangli',city:'Jath',zip:'416111'},
        { id: 3, name: 'nilesh', username: 'nileshzare', email: 'n2@gmail.com', addressLine1: 'Maharashtra', addressLine2: 'Sangli',city:'Jath',zip:'416111' },
    ];


    app.get('/api/customer', (req, res) => {
        res.send(customers);
    });


    app.post('/api/customer', (req, res) => {
        customers.push(
            { id: 4, name: 'kiran', username: 'kirandesh', email: 'k@gmail.com', addressLine1: 'Maharashtra', addressLine2: 'Sangli',city:'Jath',zip:'416111' }
        );
        res.send(customers);
        console.log('This is post customer api');
    });

};


module.exports = customerApi;