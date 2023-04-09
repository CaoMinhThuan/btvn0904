class Shape {
    color: string;
    filled: boolean;

    constructor(color: string, filled: boolean) {
        this.color = color
        this.filled = filled
    }

    getColor() {
        return this.color
    }

    getFilled() {
        return this.filled
    }

    setColor(color: string) {
        this.color = color
    }

    setFilled(filled: boolean) {
        this.filled = filled
    }

    toString(): string {
        return (`A Shape with color of ${this.color}  ${this.filled}`)

    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius
    }

    getColor(): string {
        return super.getColor();
    }

    getFilled(): boolean {
        return super.getFilled();
    }

    getRadius() {
        return this.radius
    }

    setColor(color: string) {
        super.setColor(color);
    }

    setFilled(filled: boolean) {
        super.setFilled(filled);
    }

    setRadius(radius: number) {
        this.radius = radius
    }

    getArea() {
        return (3.14 * this.radius * this.radius)
    }

    getPerimeter() {
        return (2 * 3.14 * this.radius)
    }

    toString(): string {
        return (`A Circle with ${this.radius} which is a subclass of  ${super.toString()}`);
    }

}

class Rectangle extends Shape {
    width: number;
    length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width
        this.length = length
    }

    getFilled(): boolean {
        return super.getFilled();
    }

    getColor(): string {
        return super.getColor();
    }

    getWidth() {
        return this.width
    }

    getLength() {
        return this.length
    }

    setColor(color: string) {
        super.setColor(color);
    }

    setFilled(filled: boolean) {
        super.setFilled(filled);
    }

    setWidth(width: number) {
        this.width = width
    }

    setLength(length: number) {
        this.length = length
    }

    toString(): string {
        return `A Rectangle with ${this.width} and length ${this.length} , which is a subclass of ${super.toString()}`
    }
}

class Square extends Rectangle {
    color: string
    filled: boolean;
    side: number

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
        this.side = side
    }

    getSide() {
        return this.side
    }

    setSide(side: number) {
        this.setLength(side); //goi ham setLength voi doi so la side
        this.setWidth(side); // goi ham setWidth voi doi so la side
    }

    setWidth(width: number) { // phuong thuc de cua thang Rectangle xuong
        this.setSide(width)
    }

    setLength(length: number) {  //phuong thuc de cua thang Rectangle xuong
        this.setSide(length)
    }

    toString(): string {
        return `A Square with side ${this.side}, which is a subclass of ${super.toString()}`
    }

}

let hv = new Square('clue', false, 10)
console.log(hv.toString())