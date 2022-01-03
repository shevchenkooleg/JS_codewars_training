'use strict';

function solution(str, ending){
    let l;
    l = ending.length;
    if (ending === '') {
      return true;
    } else if (l > 1) {
      if ((str.slice(-l, -1) + str.slice(-1)) === ending) {
        return true;
      } else {
        return false;
      }
    } else if (l === 1) {
      if (str.slice(-1) === ending) {
        return true;
      } else {
        return false;
      }
    }  
  }