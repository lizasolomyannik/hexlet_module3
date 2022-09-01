function getX() {
  return this.x;
};
  
function getY() {
  return this.y;
};

function getBeginPoint() {
  return this.beginPoint;
};
  
function getEndPoint() {
  return this.endPoint;
};
  
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
};

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
};

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

// function reverse(segment) {
//   const beginPoint = segment.getBeginPoint;
//   const endPoint = segment.getEndPoint;
//   const beginX = beginPoint.getX;
//   const beginY = beginPoint.getY;
//   const endX = endPoint.getX;
//   const endY = endPoint.getY;
//   return new Segment(new Point(endX, endY), new Point(beginX, beginY));
// };

function reverse(segment) => {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEndPoint();
    const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
    const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  
    return new Segment(newBeginPoint, newEndPoint);
  };

console.log(
  segment.beginPoint.x,
  segment.beginPoint.y,
  segment.endPoint.x,
  segment.endPoint.y,
);