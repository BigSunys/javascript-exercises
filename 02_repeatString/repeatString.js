const repeatString = function(string,num) {
    let resultat = '';
    if (num < 0) {
        return "ERROR"
    }else{
        for (let index = 0; index < num; index++) {
            
            resultat += string
            
        }
        return resultat 
    }
    
};
console.log(repeatString('hey',5))
// Do not edit below this line
module.exports = repeatString;
