class Calculator {

    add(numA, numB) {
    return numA + numB;
    }

    subtract(numA, numB) {
        return numA - numB;
    }
    
    divide(numA, numB) {
        return numA / numB;
    }
    
    multiply(numA, numB) {
        return numA * numB;
    }
  }
const calculator = new Calculator;
  console.log(calculator.add(5, 10))
        
  module.exports = Calculator