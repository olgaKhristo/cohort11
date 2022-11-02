console.log('hi all')
let button = document.getElementById('button')
button.addEventListener('click', (e)=> {
    console.log(e)
    let higth = e.path[1][0].value
    let waigth = e.path[1][1].value
    //console.log(higth, waigth)
    let higthSquare = Math.pow(higth, 2) 
    //console.log(higthSquare);
    let BNI = waigth / higthSquare * 703
    //console.log(BNI)

//to say error if the Wagigt or Higth is not walid
if (higth === '' || isNaN(higth) || (higth <= 0 )) {
    document.getElementById('higthError').innerHTML = 'Please provide a valid higth';
    }else{
    document.getElementById('higthError').innerHTML = '';
    }

    if (waigth === '' || isNaN(waigth) || (waigth <= 0)) {
        document.getElementById('waightError').innerHTML = 'Please provide a valid waight';
    } else {
        document.getElementById('waightError').innerHTML = '';
    }

   //to calculate the BMI
    if (BNI <= 18.5) {
        let output = document.getElementById('output')
        output.textContent = 'your BMI is ' + '' + BNI + 'and you underwaigth'
    } else if ((BNI >18.5) && (BNI < 25))  {
        let output = document.getElementById('output')
        output.textContent = 'your BMI is ' + '' + BNI + 'and your waigth is good'
    } else if ((BNI >25) && (BNI < 29)){
        let output = document.getElementById('output')
        output.textContent = 'your BMI is ' + '' + BNI + 'and you overwaigth '
    } else {
        let output = document.getElementById('output')
        output.textContent = 'your BMI is ' + '' + BNI + ', please contact your GP '
    }


})
