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
