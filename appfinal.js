const cardArray = [
    {
        name: 'kaiser_1',
        img: 'images/image_111.png',
    },

    {
        name: 'kaiser_2',
        img: 'images/image_222.png',
    },

    {
        name: 'kaiser_3',
        img: 'images/image_333.png',
    },

    {
        name: 'kaiser_4',
        img: 'images/image_444.png',
    },

    {
        name: 'kaiser_5',
        img: 'images/image_555.png',
    },

    {
        name: 'kaiser_6',
        img: 'images/image_666.png',
    },

    {
        name: 'kaiser_7',
        img: 'images/image_777.png',
    },

    {
        name: 'kaiser_8',
        img: 'images/image_888.png',
    },

    {
        name: 'kaiser_9',
        img: 'images/image_999.png',
    },

    {
        name: 'kaiser_0',
        img: 'images/image_000.png',
    },

    {
        name: 'kaiser_1',
        img: 'images/image_111.png',
    },

    {
        name: 'kaiser_2',
        img: 'images/image_222.png',
    },

    {
        name: 'kaiser_3',
        img: 'images/image_333.png',
    },

    {
        name: 'kaiser_4',
        img: 'images/image_444.png',
    },

    {
        name: 'kaiser_5',
        img: 'images/image_555.png',
    },

    {
        name: 'kaiser_6',
        img: 'images/image_666.png',
    },

    {
        name: 'kaiser_7',
        img: 'images/image_777.png',
    },

    {
        name: 'kaiser_8',
        img: 'images/image_888.png',
    },

    {
        name: 'kaiser_9',
        img: 'images/image_999.png',
    },

    {
        name: 'kaiser_0',
        img: 'images/image_000.png',
    }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid-two')
const resultDisplay = document.querySelector('#result')
let buttonsWon = document.getElementById('buttons')
let scoreText = document.querySelector('#score')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/sparkles_bg.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function chechMatch() {
    const cards = document.querySelectorAll('#grid-two img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/sparkles_bg.png')
        cards[optionTwoId].setAttribute('src', 'images/sparkles_bg.png')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Ти знайшла потрібного Кайзера!')
        cards[optionOneId].setAttribute('src', 'images/grey_bg_000.png')
        cards[optionTwoId].setAttribute('src', 'images/grey_bg_000.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/sparkles_bg.png')
        cards[optionTwoId].setAttribute('src', 'images/sparkles_bg.png')
        alert('Упс, не той Кайзер!')

    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === cardArray.length / 2) {
        scoreText.textContent = 'Вітаю, ти знайшла всіх Голубих диктаторів!'
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



































