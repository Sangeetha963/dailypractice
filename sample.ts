import { question, questionInt } from "readline-sync";

// import readline = require('readline-sync');
let result;
// take the operator input
const operator = question('Enter operator ( either +, -, * or / ): ');
// take the operand input
const number1 = questionInt('Enter first number: ');
const number2 = questionInt('Enter second number: ');
switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default:
        console.log('Invalid operator');
        break;
}