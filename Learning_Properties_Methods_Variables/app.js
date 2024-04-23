'use strict';

//Javascript code can be run in the projects powershell console
//by typing 'node name.js' where name is the file name

//#region variable properties

//typing basics
    //the four base types
    let strVariable = "This is a varaible";
        //console.log(strVariable);

    let intVariable = 15;
        //console.log(intVariable);

    let boolVariable = false;
        //console.log(boolVariable);

    let nullVariable = null;
        //console.log(nullVariable);

//dynamic typing
    //dynamic typing in action
    let dynamicVariable = 15; //assigned as an int
        //console.log('The dynamicVariable is currently a', typeof dynamicVariable);

    dynamicVariable = 'Fifteen'; //dynamically changed to a string
        //console.log('The dynamicVariable is now a', typeof dynamicVariable);

        //console.log(dynamicVariable);

//constant variables
    const unchangingString = 'Goodbye World';
        //console.log(unchangingString);

//#endregion

//#region objects

//create an object
let personObj = {
    firstName: 'John',
    surName: 'Doe',
    age: 30,
    married: false,
    partner: null
};
    //console.log('origonal values are: \n', personObj);

//access and modift object properties
    //bracket notation
    personObj['age'] = 31;
        //console.log(personObj['firstName'], '\'s birthday has passed, he is now ', personObj['age']);
        //console.log(personObj['???']); // this methods allows for searching unset properties

    //dot notation
    personObj.married = true;
        //console.log('Is', personObj.firstName, 'now married? It\'s', personObj.married);

//view the modified values
    //console.log('new values are: \n', personObj);

//#endregion

//#region arrays
//javascript arrays are lists, they have no set size
    let strColourArray = ['red', 'blue', 'green'];
        //console.log(strColourArray);

    strColourArray.push('yellow', 'orange', 'purple'); //add a new item to the array
        //console.log(strColourArray);

    //itterate through all array items and print their value, using a lanmbda
    //strColourArray.forEach(o => console.log(o))

    strColourArray.pop(); //remove the last item in the array
        //console.log(strColourArray);
//#endregion

//#region funtions
function OddOrEven(checkNum) {
    if (isNaN(checkNum)) {
        console.log('this is not a number');
    } else {
        if (checkNum % 2 == 0)
            console.log('this number if even');
        else
            console.log('this number if odd');
    }
};

//OddOrEven(1);
//OddOrEven(10);
//OddOrEven('ten');

function Fizbuzz(convertNum) {
    if (isNaN(convertNum)) {
        return 'this is not a number';
    } else {
        let fizzbuzzValue = '';
        if (convertNum % 3 == 0)
            fizzbuzzValue += 'Fizz';
        if (convertNum % 5 == 0)
            fizzbuzzValue += 'Buzz';

        return fizzbuzzValue;
    }
};

console.log(Fizbuzz(3));
console.log(Fizbuzz(5));
console.log(Fizbuzz(30));
console.log(Fizbuzz('zero'));

//#endregion