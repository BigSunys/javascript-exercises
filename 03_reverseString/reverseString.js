const reverseString = function(string) {
    let newString = "";
for (let index = string.length - 1; index >= 0; index--) {
    newString += string[index]
}
return newString
};

// console.log(reverseString('hello'))
// Do not edit below this line
module.exports = reverseString;
