function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
}

Money.prototype.exchangeTo = function exchangeTo(currency) {
  const newCurrency = currency;
  const oldCurrency = this.currency;
  if ((newCurrency === 'usd' && oldCurrency === 'usd') || (oldCurrency === 'eur' && newCurrency === 'eur')) {
    return new Money(this.value, currency);
  }
  if (oldCurrency === 'eur' && newCurrency === 'usd') {
    return new Money(this.value * 1.2, 'usd');
  }
  return new Money(this.value * 0.7, 'eur');
}

Money.prototype.add = function add(money) {
  const firstValue = this.value;
  const secondValue = money.getValue();
  const firstCurrency = this.currency;
  const secondCurrency = money.getCurrency();
  if (firstCurrency === secondCurrency) {
    return new Money(firstValue + secondValue, secondCurrency);
  }
  const secondMoneyConverted = money.exchangeTo(firstCurrency);
  const secondValueConverted = secondMoneyConverted.getValue();
  return new Money(firstValue + secondValueConverted, firstCurrency);
}

Money.prototype.format = function format() {
  const value = this.value;
  return value.toLocaleString(undefined, { style: 'currency', currency: this.currency });
}

const money1 = new Money(100);
const money2 = new Money(200, 'eur');

const money3 = money2.add(money1);
const money4 = money1.add(money2);

const money5 = new Money(10000);

console.log(money5.format());