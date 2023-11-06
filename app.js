const cardArray = [
    {
        name: 'bachira_1',
        img: 'images/image_1.png',
    },

    {
        name: 'bachira_2',
        img: 'images/image_2.png',
    },

    {
        name: 'bachira_3',
        img: 'images/image_3.png',
    },

    {
        name: 'bachira_5',
        img: 'images/image_5.png',
    },

    {
        name: 'bachira_6',
        img: 'images/image_6.png',
    },

    {
        name: 'bachira_7',
        img: 'images/image_7.png',
    },

    {
        name: 'bachira_8',
        img: 'images/image_8.png',
    },

    {
        name: 'bachira_9',
        img: 'images/image_9.png',
    },

    {
        name: 'bachira_1',
        img: 'images/image_1.png',
    },

    {
        name: 'bachira_2',
        img: 'images/image_2.png',
    },

    {
        name: 'bachira_3',
        img: 'images/image_3.png',
    },

    {
        name: 'bachira_5',
        img: 'images/image_5.png',
    },

    {
        name: 'bachira_6',
        img: 'images/image_6.png',
    },

    {
        name: 'bachira_7',
        img: 'images//image_7.png',
    },

    {
        name: 'bachira_8',
        img: 'images/image_8.png',
    },

    {
        name: 'bachira_9',
        img: 'images/image_9.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let buttonsWon = document.getElementById('buttons')
let scoreText = document.querySelector('#score')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/sparkles_bg_0.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function chechMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/sparkles_bg_0.png')
        cards[optionTwoId].setAttribute('src', 'images/sparkles_bg_0.png')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Ти знайшла потрібного Бачіру!')
        cards[optionOneId].setAttribute('src', 'images/grey_bg.png')
        cards[optionTwoId].setAttribute('src', 'images/grey_bg.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/sparkles_bg_0.png')
        cards[optionTwoId].setAttribute('src', 'images/sparkles_bg_0.png')
        alert('Упс, не той Бачіра!')

    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === cardArray.length / 2) {
        scoreText.textContent = 'Вітаю, ти знайшла всіх Бачір!'
        buttonsWon.style.display = "flex"
    }
}

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
        setTimeout(chechMatch, 500)
    }
}



































