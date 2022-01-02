'use strict';

var number = function(busStops){
  let counter = 0;
  for (let i = 0; i < busStops.length; i++) {
    counter = counter + busStops[i][0] - busStops[i][1];
  };
  return counter;
}