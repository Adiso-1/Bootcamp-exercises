class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	addToX(x) {
        this.x += x;
    }
	addToY(y) {
        this.y += y;
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    addPoint(Point) {
        this.x += Point.getX();
        this.y += Point.getY();
    }
    isSame(Point) {
        return this.x === Point.getX() && this.y === Point.getY() ? true : false;
    }
    print() {
        console.log(`x: ${this.x} y: ${this.y}`);
    }
}
const myPoint = new Point(2,4);
const myPoint2 = new Point(8,16);
myPoint.addToX(2);
myPoint.addToY(2);
myPoint.setX(8);
myPoint.setY(16);
myPoint.addPoint(myPoint2);
myPoint.isSame(myPoint2);
myPoint.print();
myPoint2.print();
