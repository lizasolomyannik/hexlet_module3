// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function getArea() {
//   return Math.PI * (this.radius ** 2);
// }

// Circle.prototype.getCircumference = function getCircumference() {
//   return 2 * Math.PI * this.radius;
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(3);
console.log(circle.getArea());