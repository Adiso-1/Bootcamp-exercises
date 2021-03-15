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
const p1 = new Point(2, 4);
const p2 = new Point(5, 7);
const p3 = new Point(10, 2);
const p4 = new Point(5, 7);
const p5 = new Point(5, 5);

class PointWorld {
    constructor() {
        this.points = [];
    }
    sortY() {
        this.points.sort((a,b)=> b.getY() - a.getY())
    }
    uniqe() {
        const uniqe = [];
        this.points.forEach((point) => {
            if (!uniqe.find(a => a.isSame(point))) {
                uniqe.push(point)    
			}
        })
        return uniqe; 
    }
    sumX() {
        let sum = 0;
        this.points.forEach(el => sum += el.getX())
        return sum;
    }
    isPoint(point) {
        if(this.points.find(a => a.isSame(point))) {
            return true;
        }
        return false;
        }
    }
    const pointWorld = new PointWorld();
    pointWorld.points.push(p1,p2,p3, p4,p5);
    // console.log(pointWorld.uniqe());
    // console.log( pointWorld.sumX());
    const p6 = new Point(15, 15);
    console.log(pointWorld.isPoint(p5));
    console.log(pointWorld.isPoint(p6));
    