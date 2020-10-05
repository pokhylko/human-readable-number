module.exports = function toReadable (number) {
  let arr = [
    [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ]

  return hundreds(number).trim();

  function hundreds(number) {
    if (number === 0) {
      return 'zero';
    } else if (number >= 100) {
      return arr[0][Math.floor(number / 100)] + ' hundred' + ' ' + teener(Math.floor(number % 100));
    }
    else {
      return teener(number);
    }
  }

  function teener(number) {
    if (number < 10) {
      return arr[0][number]
    } else if (number <= 99 && number >= 20) {
      return arr[2][Math.floor(number / 10)] + ' ' + units(number);
    } else {
      return arr[1][number - 10];
    }
  }

  function units(number) {
    if (!number % 10) {
      return;
    } else {
      return arr[0][number % 10];
    }
  }
}
