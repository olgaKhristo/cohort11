console.log('hi')

const cardArray = [
    {
        name: 'fish',
        img: 'img/fish.jpeg',
    },
    { 
        name: 'elephant',
        img: 'img/elephant.jpeg',
    },
    {
        name: 'lion',
        img: 'img/lion.jpeg',
    },
    {
        name: 'parrots',
        img: 'img/parrots.jpeg',
    },
    {
        name: 'squirrel',
        img: 'img/squirrel.jpeg',
    },
    {
        name: 'tiger',
        img: 'img/tiger.jpeg',
    },
    {
        name: 'fish',
        img: 'img/fish.jpeg',
    },
    {
        name: 'elephant',
        img: 'img/elephant.jpeg',
    },
    {
        name: 'lion',
        img: 'img/lion.jpeg',
    },
    {
        name: 'parrots',
        img: 'img/parrots.jpeg',
    },
    {
        name: 'squirrel',
        img: 'img/squirrel.jpeg',
    },
    {
        name: 'tiger',
        img: 'img/tiger.jpeg',
    }
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const ResultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'img/wall.jpeg')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
    }

    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTowId = cardsChosenIds[1]
        console.log('check for match')
        if (optionOneId === optionTowId){
            cards[optionOneId].setAttribute('src', img/wall.jpeg)
            cards[optionTowId].setAttribute('src', img/wall.jpeg)
            alert('you have clicted the same card')
        }


        if(cardsChosen[0] == cardsChosen[1]) {
            alert('you got a match')
            cards[optionOneId].setAttribute('src', img/qqq.jpeg)
            cards[optionTowId].setAttribute('src', img/qqq.jpeg)
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTowId].removeEventListener('click', flipCard)
            
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', img/wall.jpeg)
            cards[optionTowId].setAttribute('src', img/wall.jpeg)
            alert('sorry, try again')
        }
        cardsChosen = []
        cardsChosenIds = []
        ResultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length/2){
            ResultDisplay.textContent = 'Congratulations you found them all'
        }

    }


}
function flipCard(){
    const cardId = this.getAttribute('data-id')
   console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
console.log('clicked', cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
}

}


createBoard()