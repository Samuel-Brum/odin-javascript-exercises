const reverseString = function(string) {
    reversedString = '';
    for (let i = 1; i < string.length +1; i++) {
        character = string.slice(-i);
        reversedString += character[0];
    }
    
    return reversedString;
};
reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
