class Calculator {
  sum(a, b) {
    return a + b;
  }

  substract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  operate(operator, a, b) {
    switch(operator) {
      case 'sum':
        return this.sum(a, b);
      case 'substract':
        return this.substract(a, b);
      case 'multiply':
        return this.multiply(a, b);
      case 'divide':
        return this.divide(a, b);
      default:
        throw new Error('Invalid operator');
    }
  }

  getResult(operator, a, b) {
    const obj = this;
    return new Promise(function(resolve, reject) {
      let result;
      try {
        result = obj.operate(operator, a, b);
      } catch(err) {
        result = err;
      } finally {
        setTimeout(function() {
          if (result instanceof Error) {
            reject(result);
            return;
          }

          if (isNaN(result)) {
            reject(new Error('Invalid operation'));
            return;
          }

          resolve(result);
        }, (Math.random() * 2500));
      }
    });
  }
}

module.exports = Calculator;
