'use strict';

//Javascript code can be run in the projects powershell console
//by typing 'node name.js' where name is the file name

//#region variable properties

//the four base types
let strVariable = "This is a varaible";
let intVariable = 15;
let boolVariable = false;
let nullVariable = null;

let dynamicVariable = 15; //assigned as an int
console.log('The dynamicVariable is currently a', typeof dynamicVariable);

dynamicVariable = 'Fifteen'; //dynamically changed to a string
console.log('The dynamicVariable is now a', typeof dynamicVariable);

const unchangingString = 'Goodbye World';
//#endregion

//#region console code
console.log('Hello world'); //writes the interanl value to the console

console.log(strVariable);
console.log(intVariable);
console.log(boolVariable);
console.log(nullVariable);

console.log(dynamicVariable);
console.log(unchangingString);
//#endregion