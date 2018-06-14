// Function to return highest and lowest number in a string seperated by spaces

function highAndLow(numbers){

  var arr = numbers.split(' ').sort(function(a, b){return a-b});
  var highest = arr.slice(-1);
  var lowest = arr.slice(0, 1);

  return highest + ' ' + lowest;
}

highAndLow("1 88 6 -2 73 4");

// Returns "88 -2"
