const palindromes = function(inp) {
    // convert all letters to lower case
    let oldWord = inp.toLowerCase();

    // remove special characters
    let word = oldWord.replace(/[^a-zA-Z0-9]/g, "");
    // define length of loop 
    const times = word.length; 
        for (let i = 0; i < (times / 2); i++){
            if (word[i].valueOf() === word[(times - 1 - i)].valueOf()){
                continue;
            }
            else {
                return false;
            }
        }
        return true;
}
// Do not edit below this line
module.exports = palindromes;
