function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Segment(point1, point2) {
  this.point1 = point1;
  this.point2 = point2;
}

Point.prototype.toString = function toString() {
  return `(${this.x}, ${this.y})`;
}

Segment.prototype.toString = function toString() {
  const startPoint = this.point1;
  const endPoint = this.point2;
  return `[${startPoint}, ${endPoint}]`;
}

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]
 
const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)]
