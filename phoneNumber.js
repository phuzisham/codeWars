function createPhoneNumber(numbers){
  var first = numbers.slice(0, 3).join('');
  var second = numbers.slice(3, 6).join('');
  var third = numbers.slice(-4).join('');

  return '(' +first+ ')' + ' ' +second+ '-' +third;
}
