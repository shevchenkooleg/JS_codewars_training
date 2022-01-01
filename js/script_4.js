'use strict';

function tribonacci(signature,n){
  let res = [signature[0], signature[1], signature[2]];
  if (n === 0) {
    return [];
  } else if (n < 4) {
      let i = 0;
    res = []
      while (res.length < n) {
        res.push(signature[i]);
        i++;
      }
  } else {
    while (res.length < n) {
      let trib = res[res.length - 1] + res[res.length - 2] + res[res.length - 3];
      res.push(trib);
    }
  }  
  return (res);
}