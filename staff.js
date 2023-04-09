var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setName = function (name) {
        return this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        return this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        return this.age = age;
    };
    return Staff;
}());
var staff1 = new Staff('Staff 1', 'staff@gmail.com', 20);
console.log(staff1);
