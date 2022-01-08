'use strict';

function deleteNth(arr,n) {
    res_obj = {};
    res_arr = [];
    const counter = n;
    for (let i = 0; i < arr.length; i++) {
      if (typeof res_obj[arr[i]] === "undefined") {
        res_obj[arr[i]] = 1;
        res_arr.push(arr[i]);
      } else if (typeof res_obj[arr[i]] !== "undefined" && res_obj[arr[i]] < counter) {
        res_arr.push(arr[i]);
        res_obj[arr[i]] += 1;
      }
    }
    return res_arr;
}