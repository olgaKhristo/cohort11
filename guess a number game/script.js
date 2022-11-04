console.log('hi')
let btn = document.getElementById('btn');
let outputText = document.getElementById('outputText');
let number = [Math.floor(Math.random() * 100)]
btn.addEventListener('click', function() {
    let input = document.getElementById('UserInput').value
if (input == number) {
    outputText.innerHTML = `You guessed rigth, number was ${number}`
}else if(input > number){
    outputText.innerHTML = `You guessed too low, number was ${number}`
}if (input > number) {
    outputText.innerHTML = "You guessed too high"
}

})