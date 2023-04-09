"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name) {
        this.id = id;
        this.name = name;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setId = function (id) {
        this.id = id;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    return Book;
}());
exports.Book = Book;
