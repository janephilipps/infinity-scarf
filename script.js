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
  console.log('making array');
  let arr = [];
  for (let i = 1; i <= n; i++) {
    // arr.push(fibonacci(i));
    if (i === 1 || i === 2) {
      arr.push(1);
    } else {
      let f = arr[i - 2] + arr[i - 3];
      if (isFinite(f)) {
        arr.push(f);
      } else {
        console.log('infinity reached - array cut short');
        return arr;
      }
    }
  }
  console.log('done making array');
  return arr;
}

// Return array of binary numbers
var toBinary = function(a) {
  console.log('getting binary numbers');
  let arr = [];

  for (let i = 0; i < a.length; i++) {
    arr.push(convert(a[i]));
  }
  console.log('finished binary');
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
  console.log('separating');
  let s = a.join('');
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(parseInt(s[i]));
  }
  console.log('separated');

  return arr;

}

// Create the array for "data" attr in above object
// var arr = separate(toBinary(makeArray(754)));

// Given width and height, output data
var createScarf = function(width, height) {
  console.log('creating scarf');
  let data = {};
  data.width = width;
  data.height = height;
  let area = width * height;

  let start = 1;
  let arr = [];
  // 1476 is largest number before infinity
  for (let i = start; i < 1476; i++) {
    arr = separate(toBinary(makeArray(i)));
    if (arr.length < area) {
      console.log('Not long enough: ', i, arr.length, area);
    } else {
      console.log('Long enough: ', i, arr.length, area);
      break;
    }
  }

  let extra = arr.length - area;
  let newArr = arr.splice(0, arr.length - extra);
  console.log('new arr', newArr.length);
  data.data = newArr;
  console.log(data.data.join(''));
  return data;

}

createScarf(772,84);
