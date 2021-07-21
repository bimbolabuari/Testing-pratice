const stringLength = str => {
    if(str.length >= 1 && str.length <= 10) {
        return true;
    }
 return false;
};

console.log(stringLength('renovations'));

module.exports = stringLength;