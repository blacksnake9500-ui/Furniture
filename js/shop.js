
const mebels = document.querySelectorAll(".mebels")
const phones = document.querySelectorAll(".phones")
const two_card = document.querySelectorAll(".two_card")
const shopAllBtn = document.querySelector('.shop_all');
const shopPhoneBtn = document.querySelector('.shop_phone');
const shopMebelBtn = document.querySelector('.shop_mebel');
const cards = document.querySelectorAll('.two_card');

shopAllBtn.addEventListener('click', () => {
    cards.forEach(card => {
        card.style.display = 'block';
    });
});


shopPhoneBtn.addEventListener('click', () => {
    cards.forEach(card => {
        if (card.classList.contains('mebels')) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});

shopMebelBtn.addEventListener('click', () => {
    cards.forEach(card => {
        if (card.classList.contains('phones')) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});


const addCardBtn = document.getElementById('add_card_btn');
const cardCounter = document.getElementById('card_counter');
const container = document.querySelector('.card-container');

function updateCardCount() {
    const currentCards = document.querySelectorAll('.two_card');
    cardCounter.textContent = currentCards.length;
}

updateCardCount();


addCardBtn.addEventListener('click', () => {

    const newCard = document.createElement('div');
    newCard.classList.add('two_card');
    
    if (Math.random() > 0.5) {
        newCard.classList.add('phones');
        newCard.textContent = "Yangi Telefon Karta";
    } else {
        newCard.classList.add('mebels');
        newCard.textContent = "Yangi Mebel Karta";
    }
    
    container.appendChild(newCard);
    
    updateCardCount();
});


shopAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.two_card').forEach(card => {
        card.style.display = 'block';
    });
});

shopPhoneBtn.addEventListener('click', () => {
    document.querySelectorAll('.two_card').forEach(card => {
        if (card.classList.contains('mebels')) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});

shopMebelBtn.addEventListener('click', () => {
    document.querySelectorAll('.two_card').forEach(card => {
        if (card.classList.contains('phones')) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});
