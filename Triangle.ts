class Triangle {
    side1: number;
    side2: number;
    side3: number;

    constructor(side1: number, side2: number, side3: number) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    setSide1(side1: number) {
        this.side1 = side1
    }

    setSide2(side2: number) {
        this.side2 = side2
    }

    setSide3(side3: number) {
        this.side3 = side3
    }

    getPerimeter() {
        return this.side3 + this.side2 + this.side3
    }

    getArea() {
        return Math.sqrt((this.getPerimeter() / 2 * (this.getPerimeter() / 2 - this.side1) * (this.getPerimeter() / 2 - this.side2) * (this.getPerimeter()-this.side3)))
    }
}
let tri = new Triangle(1,2,3)
console.log(tri.getArea())