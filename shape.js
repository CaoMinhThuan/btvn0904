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
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.getFilled = function () {
        return this.filled;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return ("A Shape with color of ".concat(this.color, "  ").concat(this.filled));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getColor = function () {
        return _super.prototype.getColor.call(this);
    };
    Circle.prototype.getFilled = function () {
        return _super.prototype.getFilled.call(this);
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setColor = function (color) {
        _super.prototype.setColor.call(this, color);
    };
    Circle.prototype.setFilled = function (filled) {
        _super.prototype.setFilled.call(this, filled);
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return (3.14 * this.radius * this.radius);
    };
    Circle.prototype.getPerimeter = function () {
        return (2 * 3.14 * this.radius);
    };
    Circle.prototype.toString = function () {
        return ("A Circle with ".concat(this.radius, " which is a subclass of  ").concat(_super.prototype.toString.call(this)));
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.getFilled = function () {
        return _super.prototype.getFilled.call(this);
    };
    Rectangle.prototype.getColor = function () {
        return _super.prototype.getColor.call(this);
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setColor = function (color) {
        _super.prototype.setColor.call(this, color);
    };
    Rectangle.prototype.setFilled = function (filled) {
        _super.prototype.setFilled.call(this, filled);
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with ".concat(this.width, " and length ").concat(this.length, " , which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        var _this = _super.call(this, color, filled, side, side) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.setSide = function (side) {
        this.setLength(side); //goi ham setLength voi doi so la side
        this.setWidth(side); // goi ham setWidth voi doi so la side
    };
    Square.prototype.setWidth = function (width) {
        this.setSide(width);
    };
    Square.prototype.setLength = function (length) {
        this.setSide(length);
    };
    Square.prototype.toString = function () {
        return "A Square with side ".concat(this.side, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Square;
}(Rectangle));
var hv = new Square('clue', false, 10);
console.log(hv.toString());
