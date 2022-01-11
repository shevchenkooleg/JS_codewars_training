'use strict';

function deleteNth(arr,n) {
    let resObj = {};
    let resArr = [];
    const counter = n;
    for (let i = 0; i < arr.length; i++) {
      if (typeof resObj[arr[i]] === 'undefined') {
        resObj[arr[i]] = 1;
        resArr.push(arr[i]);
      } else if (typeof resObj[arr[i]] !== 'undefined' && resObj[arr[i]] < counter) {
        resArr.push(arr[i]);
        resObj[arr[i]] += 1;
      }
    }
    return resArr;
}