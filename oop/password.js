const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor(options = {}) {
    const { minLength = 8, containNumbers = true } = options;
    this.minLength = minLength;
    this.containNumbers = containNumbers;
  }

  validate(password) {
    const result = {};
    if (password.length < this.minLength) {
      Object.assign(result, { minLength: 'too small' });
    }
    if (!hasNumber(password) && this.containNumbers) {
      Object.assign(result, { containNumbers: 'should contain at least one number' });
    }
    return result;
  }
}

const validator = new PasswordValidator();
const errors1 = validator.validate('qwertya3sdf');
const errors2 = validator.validate('qwerty');
const errors3 = validator.validate('q23ty');

console.log(errors1);
console.log(errors2);
console.log(errors3);