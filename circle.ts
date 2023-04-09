class Circle {
    radius: number;
    color: string;

    constructor(radius: number, color: string,) {
        this.radius = radius
        this.color = color
    }

    getRadius(): number {
        return this.radius
    }

    getColor(): string {
        return this.color
    }

    setRadius(radius: number) {
        this.radius = radius
    }

    setColor(color: string) {
        this.color = color
    }

    getArea() {
        return 3.14 * this.radius * this.radius
    }

    getPerimeter() {
        return 2 * 3.14 * this.radius
    }

}

class Cylinder extends Circle {
    radius: number;
    color: string;
    height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height
    }

    getRadius(): number {
        return this.radius
    }

    getColor(): string {
        return this.color
    }

    getHeight(): number {
        return this.height
    }

    setRadius(radius: number) {
        this.radius = radius
    }

    setColor(color: string) {
        this.color = color
    }

    setHeight(height: number) {
        this.height = height
    }

    getArena() {
        return 2 * 3.14 * this.radius * (this.radius + this.height)
    }
    getChuvi(){
        return 2* 3.14 * (this.radius+this.height)
    }

    getArea(): number {
        return super.getArea() * this.height;
    }

}

let cy = new Cylinder(10,'red',10)
console.log(cy)
// let circle1 = new Circle(10,'blue')
// console.log(circle1.getPerimeter())