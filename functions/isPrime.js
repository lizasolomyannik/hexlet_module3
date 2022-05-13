const isPrime = (num) => {
  if (num < 2) {
    return false;
    }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  if (isPrime(num)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
