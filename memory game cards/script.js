console.log('hi')

const cardArray = [
    {
        name: 'elephant',
        img: 'img/elephant.jpeg',
    },
    {
        name: 'fish',
        img: 'img/fish.jpeg',
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
        name: 'elephant',
        img: 'img/elephant.jpeg',
    },
    {
        name: 'fish',
        img: 'img/fish.jpeg',
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


//to shuffle the cards random each time
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let CardsChosen = []
let cardChosenIds = []
const cardsWon = []

function createBoard() {
for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'img/qqq.jpeg')
    card.style.width = '100%'
    card.style.height = '100%'
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    
    gridDisplay.appendChild(card)
}
}
createBoard()

function checkMatch(){
   const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTowId = cardChosenIds[1]
   console.log(cards)
    console.log('look gor match')
    if (optionOneId == optionTowId) {
        cards[optionOneId].setAttribute('src', 'img/qqq.jpeg')
        cards[optionTowId].setAttribute('src', 'img/qqq.jpeg')
        alert('you clikced the same card')

    }


    if (CardsChosen[0] == CardsChosen[1]) {
        alert('you got a match')
        cards[optionOneId].setAttribute('src', 'img/wall.jpeg')
        cards[optionTowId].setAttribute('src', 'img/wall.jpeg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTowId].removeEventListener('click', flipCard)
        
        cardsWon.push(CardsChosen)
} else {
    cards[optionOneId].setAttribute('src', 'img/qqq.jpeg')
    cards[optionTowId].setAttribute('src', 'img/qqq.jpeg')
    alert('sorry try again')
}
    resultDisplay.innerHTML = cardsWon.length
CardsChosen = []
cardChosenIds = []

if(cardsWon.length == cardArray.length/2) {
    resultDisplay.innerHTML = 'Congrats, you got them all'

}

}

//to flip a card
function flipCard(){
    
const cardId = this.getAttribute('data-id')   
CardsChosen.push(cardArray[cardId].name)
cardChosenIds.push(cardId)
console.log(CardsChosen)
console.log(cardChosenIds)

this.setAttribute('src', cardArray[cardId].img)
if(CardsChosen.length === 2){
    setTimeout(checkMatch, 500)
}

}