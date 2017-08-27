var logger = function (req, res, next) {
    console.log('this is middleware');
    console.log(req);
    next();
}

module.exports = logger;