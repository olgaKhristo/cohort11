console.log('hi')

function myFanction(){
let colours = ['green', 'blue', 'black', 'yellow', 'orange', 'red'];
console.log(colours)
let colourPicker = colours[Math.floor(Math.random() * colours.length)];
    console.log(colourPicker)
    let backChange = document.getElementById('colour');
    console.log(backChange);
    backChange.style.backgroundColor = colourPicker
    backChange.style.height = '20rem'
    backChange.style.width = '20rem'
}
let myButton = document.getElementById('myButton')
myButton.addEventListener('click', (e)=> {
    
})

myFanction();