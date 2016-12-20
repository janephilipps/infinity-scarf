/* Standard scarf sizes are 772 x 84 pixels or 1120 x 176 pixels (1 pixel = 1 knit stitch)
 * 772 * 84 = 64848 => separate(toBinary(makeArray(433))) to get 64948
 * 1120 * 176 = 197120 => separate(toBinary(makeArray(755))) to get 197632
 */

// Recursive Fibonacci function for development/reference
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
    /* Using the recursive function above is slow,
     * so instead, using the array this function is creating
     * to find the next number in the sequence
     */
    // arr.push(fibonacci(i));
    if (i === 1 || i === 2) {
      arr.push(1);
    } else {
      let f = arr[i - 2] + arr[i - 3];
      // Handles infinity case
      if (isFinite(f)) {
        arr.push(f);
      } else {
        console.log('Infinity reached, array cut short.');
        return arr;
      }
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

  // If using 8-bit binary etc., this adds 0s to beginning
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

// Given width and height, output data
var createScarf = function(width, height) {
  let area = width * height;
  let arr = [];
  let data = {};
  let extra;
  let newArr;
  let start = 1;

  data.width = width;
  data.height = height;

  // 1476 is largest number before Fibonacci sequence reaches infinity
  for (let i = start; i < 1476; i++) {
    arr = separate(toBinary(makeArray(i)));
    // Logging for testing
    // if (arr.length < area) {
    //   console.log('Not long enough: ', i, arr.length, area);
    // } else {
    //   console.log('Long enough: ', i, arr.length, area);
    //   break;
    // }
  }

  extra = arr.length - area;
  newArr = arr.splice(0, arr.length - extra);

  data.data = newArr;

  return data;

}

createScarf(772,84);
