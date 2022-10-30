console.log('hi all')
let button = document.getElementById('button')
button.addEventListener('click', (e)=> {
    console.log(e)
    let higth = e.path[1][0].value
    let waigth = e.path[1][1].value
    //console.log(higth, waigth)
    let higthSquare = Math.pow(higth, 2) 
    //console.log(higthSquare);
    let BNI = waigth / higthSquare
    //console.log(BNI)
    
    let output = document.getElementById ('output')
    output.textContent = 'your BMI is '+ '' + BNI


})
