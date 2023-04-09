var Triangle = /** @class */ (function () {
    function Triangle(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    Triangle.prototype.setSide1 = function (side1) {
        this.side1 = side1;
    };
    Triangle.prototype.setSide2 = function (side2) {
        this.side2 = side2;
    };
    Triangle.prototype.setSide3 = function (side3) {
        this.side3 = side3;
    };
    Triangle.prototype.getPerimeter = function () {
        return this.side3 + this.side2 + this.side3;
    };
    Triangle.prototype.getArea = function () {
        return Math.sqrt((this.getPerimeter() / 2 * (this.getPerimeter() / 2 - this.side1) * (this.getPerimeter() / 2 - this.side2) * (this.getPerimeter() - this.side3)));
    };
    return Triangle;
}());
var tri = new Triangle(1, 2, 3);
console.log(tri.getArea());
