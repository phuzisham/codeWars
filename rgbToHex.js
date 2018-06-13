// The function...

let numberToHex = function (num) {
  let hex = Number(num).toString(16);
//   if (hex.length < 2) {
//        hex = "0" + hex;
//   }
  return hex.padStart(2, "0");
};

function rgbToHex(r, g, b){
  r = numberToHex(r);
  g = numberToHex(g);
  b = numberToHex(b);

  return r+g+b;
}

// The test...(note that this is using built-in CodeWar test methods)...

describe("rgbToHex", function(){
  it("should convert rgb to hex codes", function(){
    Test.assertEquals(rgbToHex(255, 90, 0), 'ff5a00')
  });
});
