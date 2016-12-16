// Fibonacci Infinity Scarf
// This code generates data for an "infinity" scarf based on the Fibonacci sequence

// TODO: Write a function where user passes in width(stitches) and height(rows) and outputs:
// {
//   width: width,
//   height: height,
//   data : [0,1,0,0,1,1, .... in length of width * height]
// }


// Standard scarf sizes are 772 x 84 pixels or 1120 x 176 pixels (1 pixel = 1 knit stitch)
// 772 * 84 = 64848 => pass in 433 below to get 64948
// 1120 * 176 = 197120 => pass in 755 below to get 197632

// Recursive Fibonacci function
var fibonacci = function(n) {

  // base case #1
  if (n === 1) {
    return 1;
  // base case #2
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

// Store Fibonacci numbers in array
var makeArray = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    // arr.push(fibonacci(i));
    if (i === 1 || i === 2) {
      arr.push(1);
    } else {
      let f = arr[i - 2] + arr[i - 3];
      arr.push(f);
    }
  }
  return arr;
}

// Return array of binary numbers
var toBinary = function(a) {
  let arr = [];

  for (let i = 0; i < a.length; i++) {
    arr.push(convert(a[i]));
  }

  return arr;
}

// Convert decimal numbers to binary numbers
var convert = function(n) {
  let r = 2;
  let binary = [];
  let remainder;

  // Convert base 10 number to binary
  while (n > 0) {
    remainder = n % r;
    n = Math.floor(n / r);
    binary.unshift(remainder);
  }

  // If using 8-bit etc.
  // while (binary.length < 8) {
  //   binary.unshift('0');
  // }

  let s = binary.join('');
  return s;
}


// Separate array of binary numbers into individual comma separated numbers
var separate = function(a) {
  let s = a.join('');
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(parseInt(s[i]));
  }

  return arr;

}

// Create the array for "data" attr in above object
var arr = separate(toBinary(makeArray(754)));
