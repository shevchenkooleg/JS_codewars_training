'use strict';

function filter_list(l) {
  let res = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      res.push(l[i]);
    }
  }
  return res;
}