
let userNum = [1, 2, 3]
let compNum = [1]

for (let i=0; i < compNum.length; i++) {
    if (compNum.length < 4) {
        let num = Math.floor(Math.random() * 100)
        compNum.push(num)
        
    } else if (compNum.length === 4){
        
    }
}

function NumCompare() {
    console.log(compNum)
    console.log('hi')
    if( userNum === compNum) {
        return "you win"
    }else{
       return "Have another go"
    }
}
NumCompare();
//console.log(compNum);