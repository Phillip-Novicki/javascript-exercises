const removeFromArray = function(arr)
{
        for (let a = 1; a <= arguments.length; a++){
            num = arguments[a];
        
            for (let i = 0; i <= arr.length; i++){
                if (arr[i] === num){
                    arr.splice(i, 1);
                }
            }
        }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
