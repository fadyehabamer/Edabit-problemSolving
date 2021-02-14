class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    getArea() {
        return this.sideA * this.sideB
    };
    getPerimeter() {
        return (this.sideA + this.sideB) * 2
    };
}

class Circle {
    constructor(r) {
        this.r = r;
    }
    getArea() {
        return this.r * this.r * Math.PI
    };
    getPerimeter() {
        return this.r * 2 * Math.PI
    };

}
let q = new Circle(4.44);