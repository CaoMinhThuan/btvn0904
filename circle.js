var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.getArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * 3.14 * this.radius;
    };
    return Circle;
}());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(radius, color, height) {
        var _this = _super.call(this, radius, color) || this;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.getRadius = function () {
        return this.radius;
    };
    Cylinder.prototype.getColor = function () {
        return this.color;
    };
    Cylinder.prototype.getHeight = function () {
        return this.height;
    };
    Cylinder.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Cylinder.prototype.setColor = function (color) {
        this.color = color;
    };
    Cylinder.prototype.setHeight = function (height) {
        this.height = height;
    };
    Cylinder.prototype.getArena = function () {
        return 2 * 3.14 * this.radius * (this.radius + this.height);
    };
    Cylinder.prototype.getChuvi = function () {
        return 2 * 3.14 * (this.radius + this.height);
    };
    Cylinder.prototype.getArea = function () {
        return _super.prototype.getArea.call(this) * this.height;
    };
    return Cylinder;
}(Circle));
var cy = new Cylinder(10, 'red', 10);
console.log(cy);
// let circle1 = new Circle(10,'blue')
// console.log(circle1.getPerimeter())
