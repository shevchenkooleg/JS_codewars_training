'use strict';

function pyramid(balls) {
  let counter = 0,
      sum = 0,
      _ = 0;
  while (sum < balls) {
    _++;
    sum = sum + _;
    counter++;  
//     console.log(_, sum, counter)
  }
//   console.log(counter)
  if (balls < sum) {
    return (counter - 1);
  } else {
    return counter;
  }
}