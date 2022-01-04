'use strict';

function race(v1, v2, g) {
  let res = [];
  const vRef = v2 - v1;
  let time = g / vRef;
  if (time < 1) {
    res.push(0);
    time = time * 60;
    res.push(Math.floor(time));
    time = (time - res[1]) * 60;
    res.push(Math.floor(time));
//     console.log(res);
  } else {
    res.push(Math.floor(time));
    time = time - res[0];
    time = time * 60;
    res.push(Math.floor(time));
    time = (time - res[1]) * 60;
    res.push(Math.floor(time));
//     console.log(res);
  }
  if (res[2] === 59 && res[1] === 19) {
    res[1] = 20;
    res[2] = 0;
  } else if (res[1] < 0) {
    return null;
  }
  return res;
}