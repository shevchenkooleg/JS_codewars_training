'use strict';

function solution(string) {
  _ = [];
  const tmp = string.split(/(['A-Z'][a-z]*)/g)
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] != '') {
      _.push(tmp[i]);
    }
  }
  let res = _.join(' ');
  return res;  
}