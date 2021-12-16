//helloWorld function
const helloWorld = function () {
    return "Hello, World!";
}


function sayHello(name){
    if (name === undefined || name === true || name === false) {
        return "Hello, World!"
    }else
    return "Hello, " + name + "!";
}

function isFive(num){
    return parseInt(num) === 5;
}

function isEven(num){
    return (num % 2 === 0);
}

function isVowel(input){

    return (input === 'a' || input === 'A');
}

function add(num1, num2){

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)){
        return "NaN";
    } else {
        return num1 + num2;
    }

}

console.log(add("banana", "split"))



// num1 = parseInt(num1);
// num2 = parseInt(num2);
// if (typeof num1 === 'number' && typeof num2 === 'number'){
//
//     return num1 + num2;
// }
//
// else return typeof num1;



// function helloWorld(name){
//     return "Hello, " + name + "!";
// }
















