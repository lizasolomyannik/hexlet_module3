class Square {
  constructor(side) {
    this.side = side;
  }
  
  getSide() {
    return this.side;
  }
}

class SquaresGenerator {
  static generate(side, count = 5) {
    const res = [];
    for (let i = 0; i < count; i += 1) {
      res.push(new Square(side));
    }
    return res;
  }
}

const squares = SquaresGenerator.generate(3, 2);

console.log(squares);