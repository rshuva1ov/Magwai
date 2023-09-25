// Menu

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

// Show cards

const moreBtn = document.querySelector('.more__btn');
const cardsShow = document.querySelector('.cards__show');

moreBtn.addEventListener('click', () => {
    cardsShow.style.display = 'grid';
    moreBtn.style.display = 'none';
})

// Ajax

async function getResponse() {
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await responce.json()
    content = content.splice(0, 5)
    let key;

    for (key in content) {
        cardsShow.innerHTML +=
        `
        <div class="card">
            <div class="card__image" style="background-image: url('img/cards/card-1.png');"></div>
            <div class="item">
                <h4 class="item__title">${content[key].title}</h4>
                <h5 class="item__subtitle">How to increase your productivity with a Music</h5>
                <p class="item__description">${content[key].body}</p>
                <p class="item__data">Posted by <span>Eugenia</span>, on July  24, 2019</p>
                <button class="item__btn">Continue reading</button>
            </div>
        </div>
        `
    }
}

getResponse()
