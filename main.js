"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var PersonManager = /** @class */ (function () {
    function PersonManager() {
        this.persons = [];
    }
    PersonManager.prototype.getList = function () {
        return this.persons;
    };
    PersonManager.prototype.addPerson = function (ps) {
        this.persons.push(ps);
    };
    PersonManager.prototype.findPerson = function (id) {
        var index = -1;
        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons[i].id === id) {
                index = i;
            }
        }
        if (index === -1) {
            console.log('nhan vien nay khong thuoc cong ty');
        }
        return index;
    };
    PersonManager.prototype.showPerson = function (id) {
        var index = this.findPerson(id);
        if (this.persons[index].id === id) {
            console.log(this.persons[index]);
        }
        console.log('nhan vien nay khong thuoc cong ty');
    };
    PersonManager.prototype.deletePerson = function (id) {
        var index = this.findPerson(id);
        if (this.persons[index].id === id) {
            this.persons.splice(index, 1);
        }
        console.log('nhan vien khong thuoc cong ty');
    };
    PersonManager.prototype.updatePerson = function (id, firstName, lastName, address) {
        var index = this.findPerson(id);
        if (this.persons[index].id === id) {
            var personc = this.persons[index];
            this.persons[index] = __assign(__assign({}, personc), { address: address, firstName: firstName, lastName: lastName });
        }
        console.log('nhan vien khong thuoc cong ty');
    };
    return PersonManager;
}());
var p1 = new user_1.Person(1, 'cao', 'camcam', '18-12-2023', 'namdinh', 1);
var p2 = new user_1.Person(2, 'cao', 'camcam', '18-12-2023', 'namdinh', 2);
var p3 = new user_1.Person(3, 'cao', 'camcam', '18-12-2023', 'namdinh', 3);
var quanly = new PersonManager();
quanly.addPerson(p1);
quanly.addPerson(p2);
quanly.addPerson(p3);
quanly.updatePerson(1, 'cacao', 'camcamcam', 'hn');
console.table(quanly.getList());
