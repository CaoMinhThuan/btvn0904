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
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    Point2D.prototype.getXY = function () {
        return { x: this.x, y: this.y };
    };
    Point2D.prototype.setXy = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.getX = function () {
        return _super.prototype.getX.call(this);
    };
    Point3D.prototype.getY = function () {
        return _super.prototype.getY.call(this);
    };
    Point3D.prototype.getZ = function () {
        return this.z;
    };
    Point3D.prototype.setZ = function (z) {
        this.z = z;
    };
    Point3D.prototype.getXyz = function () {
        return { x: this.x, y: this.y, z: this.z };
    };
    Point3D.prototype.setXyz = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
    return Point3D;
}(Point2D));
var c = new Point3D(10, 30, 20);
console.log(c.getXyz());
