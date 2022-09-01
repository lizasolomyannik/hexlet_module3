const printer = {
  name: 'Hexlet',
  print(greeting = 'hello') {
    console.log(`${greeting}, ${this.name}`);
  }
};

const boundPrint = printer.print.bind(printer);

setTimeout(printer.print.bind(printer, 'hi'), 1000);
