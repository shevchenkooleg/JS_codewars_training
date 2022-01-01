'use strict';

function oddOrEven(array) {
  let sunOfList = 0;
  for (let i = 0; i < array.length; i++) {
    sunOfList += array[i];
  }
  if (sunOfList % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}