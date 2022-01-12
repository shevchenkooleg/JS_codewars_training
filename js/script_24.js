'use strict';

function solve(arr) {
  if (arr == []) {
    return [];
  }
  arrDct = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in arrDct) {
      arrDct[arr[i]] = i;
    } else {
      arrDct[arr[i]] = i;
    }
  }
  const tmp = Object.values(arrDct);
  let res = [];
  tmp.sort(compareNum);
  tmp.forEach(el => {
    res.push(arr[el])
  });
  return res;
}

function compareNum(a, b) {
  return a - b;
}
