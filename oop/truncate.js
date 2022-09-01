export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  constructor(userOptions = {}) {
    this.options = { ...Truncater.defaultOptions, ...userOptions };
  }

  truncate(text, userOptions2 = {}) {
    this.finalOptions = { ...this.options, ...userOptions2 };
    const strLength = this.finalOptions.length;
    const strSep = this.finalOptions.separator;
    if (text.length > strLength) {
        const truncatedString = text.substring(0, strLength);
        return `${truncatedString}${strSep}`;
    }
    return text;
  }
}

// const truncater = new Truncater();
// console.log(truncater.truncate('one two')); // 'one two'
// console.log(truncater.truncate('one two', { 'length': 6 })); // 'one tw...'
 
const truncater = new Truncater({ 'length': 6 });
console.log(truncater.truncate('one two', { 'separator': '.' })); // 'one tw.'
console.log(truncater.truncate('one two', { 'length': '3' })); // 'one...'
