const capitalizeString = str => {
 let newString = str.toLowerCase();
 newString = newString.charAt(0).toUpperCase() + newString.slice(1);
   return newString;
};

console.log(capitalizeString('hELLo'))

module.exports = capitalizeString;