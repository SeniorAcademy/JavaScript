// switch statements

// let categories = 'computer';

// switch(categories){

//     case 'phone':
//        console.log('phone category');
//     break;

//     case 'computer':
//        console.log('computer category');
//     break;

//     default:
//        console.log('wrong category');
// }


// // multiple case switch program
// let fruit = 'apple';
// switch(fruit) {
//     case 'apple':
//     case 'mango':
//     case 'pineapple':
//         console.log(`${fruit} is a fruit.`);
//         break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;
// }


// let day = new Date().getDay();

// switch (day) {
//   case 0:
//     day = "Bazar Gunu";
//     break;

//   case 1:
//     day = "1ci gun";
//     break;

//   case 2:
//     day = "2ci gun";
//     break;

//   case 3:
//     day = "3cu gun";
//     break;

//   case 4:
//     day = "4cu gun";
//     break;

//   case 5:
//     day = "5ci gun";
//     break;

//   case 6:
//     day = "6ci gun";
//     break;
// }
// console.log(`bugün ${day}`);


// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = 'WeekEnd';
//         break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day = 'WeekDay';
//         break;
// }

// console.log(`Today is ${day}`);




// const age = 10;
// const firstName = "Ehmed";

// switch (true) {
//   case age >= 0 && age <= 12:
//     console.log(`${firstName} is a child`);
//     break;
//   case age >= 13 && age <= 18:
//     console.log(`${firstName} is a teenager`);
//     break;
//   default:
//     console.log(`${firstName} is an adult`);
// }



// let result;
// const operator = prompt('Enter operator ( either + , - , * , / ):');

// const number1 = parseFloat(prompt('Enter First number: '));
// const number2 = parseFloat(prompt('Enter Second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }


// let variable = "hello";
// let result;

// if (typeof variable === "string") {
//     result = variable + " World!";
// } else if (typeof variable === "number") {
//     result = variable ** 2;
// } else if (typeof variable === "boolean") {
//     result = !variable;
// } else if (Array.isArray(variable)) {
//     result = variable.reverse();
// } else {
//     result = "Unsupported type";
// }

// console.log(result);

// let variable = "Hello";
// let result;

// switch (typeof variable) {
//     case "string":
//         result = variable + " World!";
//         break;
//     case "number":
//         result = variable ** 2;
//         break;
//     case "boolean":
//         result = !variable;
//         break;
//     case "object":
//         if (Array.isArray(variable)) {
//             result = variable.reverse();
//         } else {
//             result = "Unsupported type";
//         }
//         break;
//     default:
//         result = "Unsupported type";
// }

// console.log(result);

const number = 7;

// Using if-else statements
let resultWithIfElse;

if (number > 0) {
    resultWithIfElse = "Positive";
} else if (number < 0) {
    resultWithIfElse = "Negative";
} else {
    resultWithIfElse = "Zero";
}

console.log(`Using if-else: ${resultWithIfElse}`);

// Using switch statement
let resultWithSwitch;

switch (Math.sign(number)) {
    case 1:
        resultWithSwitch = "Positive";
        break;
    case -1:
        resultWithSwitch = "Negative";
        break;
    default:
        resultWithSwitch = "Zero";
}

console.log(`Using switch: ${resultWithSwitch}`);




