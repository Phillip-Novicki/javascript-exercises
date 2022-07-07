const ftoc = function(temp) {
  //convert farenheit to celcius
  let newTemp = ((temp - 32) * (5 / 9));
  
  // return value rounded to nearest decimal
  newTemp = round(newTemp, 1);
  return newTemp;

};

const ctof = function(temp) {
  //convert celcius to fahrenheit
  let newTemp = ((temp * (9 / 5)) + 32)

  // return value rounded to nearest decimal
  newTemp = round(newTemp, 1);
  return newTemp;

};


//round to given precision 
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
