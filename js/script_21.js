'use strict';

function dataReverse(data) {
  let tmp = [];
  const bitCounter = data.length/8;
  let counter = 0;
  while (counter < bitCounter) {
    tmp.push([]);
    counter++;
  }  
  let j = 0;
  for (let i = 0; i < data.length; i++) {
    if ((i + 1) % 8 !== 0) {
      tmp[j].push(data[i]);
    }
    else {
      j++;
      tmp[j-1].push(data[i]);
    }
  }
//   console.log(tmp);
  let res = [];
  for (let i = tmp.length - 1; i >= 0; i--) {
    for (let j = 0; j < tmp[i].length; j++) {
      res.push(tmp[i][j]);
    }
  }
//   console.log(res);
  return res;
}

// 'some string'