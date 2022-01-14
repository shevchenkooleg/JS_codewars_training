'use strict';

function fakeBin(x){
    let res = '';
    for (let elem of x) {
      if (elem < 5) {
        res += 0;
      } else {
        res += 1;
      }
    }
    return res;
  }