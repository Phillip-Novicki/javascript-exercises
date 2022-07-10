const fibonacci = function(num) {
    let number = num;
    let sum = 1;
    let oneBack = 1, twoBack = 1;

    // test for negative numbers
    if (number < 0){
        return 'OOPS';
    }   

    // loop sequence
    for (i = 0; i < number; i++){
        // special exceptions for i == 0 and i == 1
        if (i == 0){
            sum = 1;
            twoBack = 1;
        }
        else if (i == 1){
            sum = 1;
            oneBack = 1;
        }
        // actual loop
        else if (i > 1){
            sum = oneBack + twoBack;
            twoBack = sum - twoBack;
            oneBack = sum;            
        }
    }
    return sum;
}
// Do not edit below this line
module.exports = fibonacci;
