//create simple addition function
const add = function() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }

  return sum;
	
};

//create subtraction function
const subtract = function() {
	let diff = arguments[0];
  for (i = 1; i < arguments.length; i++){
    diff -= arguments[i];
  }

  return diff;
};

//convert array into sum
const sum = function(array) {
  let sum = 0;
  let nums = array;
  if (!arguments.length){
    return sum;
  }
  for (i = 0; i < nums.length; i++){
    sum += nums[i];
  }

  return parseInt(sum);
  };

// convert array into product  
const multiply = function(array) {
  let product = 1;
  let nums = array;
  for (i = 0; i < nums.length; i++){
    product *= nums[i];
  }
  return product;

};

// multiply num (exp amount of times)
const power = function(num, exp) {
  let solution = 1;
  for (i = 0; i < exp; i++){
    solution *= num;
  } 

  return solution;
	
};

// count from 1 to number using i
const factorial = function(number) {
  let solution = 1;
  for (let i = 1; i <= number; i++){
    solution *= i;
  }
  return solution;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
