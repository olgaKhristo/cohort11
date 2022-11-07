console.log('hi')
function tempConverter (number) {
let tempriture = number(C * 9/5) + 32;
console.log(number)
}


//numbers[Math.floor(Math.random) * 15]

let myNumbers = ['89']
for(let i=0; i<myNumbers.length; i++) {
    if (myNumbers.length < 20) {
        let Num = Math.floor(Math.random()*200)
        myNumbers.push(Num)
    
    }else if(myNumbers.length ===20){
        console.log(myNumbers)

    }
}
function multipleItems(){
 myNumbers.map((num) => {
    console.log(num * 10)
    return num * 10 
})
}
console.log(multipleItems())
