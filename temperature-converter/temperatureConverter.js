class TemperatureConverter {
  celciusToFahrenheit(x) {
    return (9 / 5) * x + 32;
  }

  celciusToReaumur(x) {
    return (4 / 5) * x;
  }

  fahrenheitToCelcius(x) {
    return ((x - 32) * 5) / 9;
  }

  fahrenheitToReaumur(x) {
    return ((x - 32) * 4) / 9;
  }

  reaumurToCelcius(x) {
    return (5 / 4) * x;
  }

  reaumurToFahrenheit(x) {
    return (9 / 4) * x + 32;
  }

  convert(from, to, x) {
    const types = new Set(['celcius', 'fahrenheit', 'reaumur']);

    const isSourceValid = types.has(from);
    const isTargetValid = types.has(to);

    if (!isSourceValid && !isTargetValid) {
      throw new Error('Invalid temperature scales');
    }

    if (!isSourceValid) {
      throw new Error('Invalid source temperature scale');
    }

    if (!isTargetValid) {
      throw new Error('Invalid target temperature scale');
    }

    if (typeof x !== 'number' || isNaN(x)) {
      throw new Error('Invalid temperature input');
    }

    if (from === to) {
      return x;
    }

    switch (`${from}_${to}`) {
      case 'celcius_fahrenheit':
        return this.celciusToFahrenheit(x);
      case 'celcius_reaumur':
        return this.celciusToReaumur(x);
      case 'fahrenheit_celcius':
        return this.fahrenheitToCelcius(x);
      case 'fahrenheit_reaumur':
        return this.fahrenheitToReaumur(x);
      case 'reaumur_celcius':
        return this.reaumurToCelcius(x);
      case 'reaumur_fahrenheit':
        return this.reaumurToFahrenheit(x);
      default:
        throw new Error('Invalid case');
    }
  }

  getResult(from, to, x) {
    const obj = this;
    return new Promise(function (resolve, reject) {
      let result;
      try {
        result = obj.convert(from, to, x);
      } catch (err) {
        result = err;
      } finally {
        setTimeout(function () {
          if (result instanceof Error) {
            reject(result);
            return;
          }

          resolve(result);
        }, Math.random() * 2500);
      }
    });
  }
}

module.exports = TemperatureConverter;
