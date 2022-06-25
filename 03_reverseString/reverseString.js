const reverseString = function(string) {
    let newString = [];
    let sL = string.length;
    for(let i = 0; i <= sL; i++){
        newString.push(string[sL - (i)]);
    }
    newString = newString.join('');
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
