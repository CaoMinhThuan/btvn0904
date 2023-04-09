"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Job = void 0;
var Job;
(function (Job) {
    Job[Job["staff"] = 1] = "staff";
    Job[Job["manager"] = 2] = "manager";
    Job[Job["president"] = 3] = "president";
    Job[Job["chairperson"] = 4] = "chairperson";
})(Job = exports.Job || (exports.Job = {}));
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName, birthday, address, job) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.job = job;
    }
    return Person;
}());
exports.Person = Person;
