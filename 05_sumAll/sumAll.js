const sumAll = function(num1, num2) {
    let total = 0;
    // test for non number parameters
    if (typeof(num1)!= "number"){
        return 'ERROR';
    }
    if (typeof(num2)!="number"){
        return 'ERROR';
    }

    // perform math computations to make sure numbers are in range
    if (num1 < 0){
        return 'ERROR';
        }
        else if (num2 < 0){
        return 'ERROR';
        }
        else if (num1 < num2){
            for (let i = num1; i <= num2; i++){
                total += i;
        }}
        else if (num1 > num2){ 
            for (let i = num2; i <= num1; i++){
                total +=i;
        }}
        return total;
    }
// Do not edit below this line
module.exports = sumAll;
