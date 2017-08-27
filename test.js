function Add(num1, num2) {
    return num1 + num2;
}

// console.log(Add(2, 4));

// setTimeout(function () {
//     console.log(Add(3, 4));
//     console.log('Called after 1000ms');
// }, 1000);


// setInterval(function () {
//     console.log(Add(2, 4) + 'Called after every 1 sec');
// }, 1000);


var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.getEmployeeList = function () {
        return 1;
    };
    Employee.prototype.getEmployee = function (id) {
        return this.id;
    };
    Employee.prototype.saveEmployee = function () {
        return true;
    };
    return Employee;
}());



module.exports = {
    Add: Add,
    Employee: Employee
};