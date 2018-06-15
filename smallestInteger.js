// Find smallest integer in array

class SmallestIntegerFinder {
  findSmallestInt(args) {
  var small = 0;  // Variable to hold smallest integer
    for (var i = 0; i < args.length; i++) {
      if (small > args[i] || small === 0) {
      small = args[i];
      }
    }
    return small;
  }
}
