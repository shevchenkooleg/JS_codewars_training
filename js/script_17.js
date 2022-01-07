'use strict';

function numberOfPairs(gloves)
{
  let dict = {};
  for (let i = 0; i < gloves.length; i++) {
    if (typeof dict[gloves[i]] !== 'undefined') {
      dict[gloves[i]] += 1;
    } else {
      dict[gloves[i]] = 1;
    }
  }
  const list = Object.keys(dict);
  let counter = 0;
  for (let i = 0; i < list.length; i++) {
    if ((Math.floor(dict[list[i]] / 2)) >= 1) {
      counter += (Math.floor(dict[list[i]] / 2));
    } else {
      counter += 0;
    }
  }
  return counter;
}