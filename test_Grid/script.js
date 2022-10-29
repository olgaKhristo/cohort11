console.log("hiy")
let myArray = [
    "milk",
    "cocky",
    "banana",
    "dress",
    "kids",
    "cocky",
]
console.log("may array",  myArray);
let myFoodIndexOne = myArray.indexOf("milk");
console.log(myFoodIndexOne);
let myFoodIndex = myArray.indexOf("cocky", 2);
console.log(myFoodIndex);

let IAte = myArray.pop();
console.log (IAte, myArray);

let iBougth = myArray.push("soap");
console.log(iBougth, myArray);
console.log(myArray.length);

let findIndexTrue = myArray.indexOf("banana");
let findIndexFalse = myArray.indexOf("veg");
console.log("found item", findIndexTrue);
console.log("not found", findIndexFalse);

let iAteAgain = myArray.shift();
console.log(iAteAgain, myArray);

/** let iChange = myArray.sort();
console.log(iChange); */

let myReverce = myArray.reverse();
console.log(myReverce);

function myFanction(a, b) {
   
    return a + b;
    }
   let sum = myFanction('hi', 'all');
   console.log(sum);

let myButton = document.createElement('button1');
myButton.id = 'button1';
let myButton2 = document.createElement('button2');
myButton2.id = 'button2';
let feelMeIn = document.getElementById('feelMeIn'); 
feelMeIn.append(myButton);
feelMeIn.append(myButton2);

let Button1 = document.getElementById('button1');
let Button2 = document.getElementById('button2');
feelMeIn.style.width = '34rem'
feelMeIn.style.height = '34rem'
myButton.style.height = '3rem'
myButton2.style.height = '3rem'
myButton.style.width = '5rem'
myButton2.style.width = '5rem'

Button1.addEventListener('click', (e) => {
    console.log('hi all')
}) 

Button2.addEventListener('click', (e) => {
    console.log(e)
}) 

