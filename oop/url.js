class Url {
  constructor(string) {
    this.url = new URL(string);
  }

  getScheme() { // ok
    return this.url.protocol.slice(0, -1);
  }

  getHostName() { // ok
    return this.url.hostname;
  }

  getQueryParams() { // ok
    this.params = new URLSearchParams(this.url.search);
    this.paramsObject = Object.fromEntries(this.params);
    return this.paramsObject;
  }

  getQueryParam(name, message = null) { // ok
    if (this.paramsObject.hasOwnProperty(name)) {
      return this.paramsObject[name];
    }
    return message;
  }

  equals(url2) {
    const strUrl1 = this.url.href;
    const strUrl2 = url2.url.href;
    return strUrl1 == strUrl2;
  }
}

// console.log(url.getScheme()); // 'http'
// console.log(url.getHostName()); // 'yandex.ru'
// console.log(url.getQueryParams());
// {
//   key: 'value',
//   key2: 'value2',
// };

// console.log(url.getQueryParam('key')); // 'value'
// console.log(url.getQueryParam('key2', 'lala')); // 'value2'
// console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
// console.log(url.getQueryParam('new')); // null

const url = new Url('http://yandex.ru:80?key=value&key2=value2');

console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false