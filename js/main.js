// Menu

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
})

// Show cards

// Ajax

// async function getResponse() {
//     let responce = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let content = await responce.json()
//     content = content.splice(0, 5)
//     let key;

//     for (key in content) {
//         cardsShow.innerHTML +=
//         `
//         <div class="card">
//             <div class="card__image" style="background-image: url('img/cards/card-1.png');"></div>
//             <div class="item">
//                 <h4 class="item__title">${content[key].title}</h4>
//                 <h5 class="item__subtitle">How to increase your productivity with a Music</h5>
//                 <p class="item__description">${content[key].body}</p>
//                 <p class="item__data">Posted by <span>Eugenia</span>, on July  24, 2019</p>
//                 <button class="item__btn">Continue reading</button>
//             </div>
//         </div>
//         `
//     }
// }

// getResponse()

let cardCount = 0;
const authors = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Paul", "Mark"];

const moreBtn = document.querySelector('.more__btn');
const cardsList = document.querySelector('.cards__list');
const template = document.querySelector('.card');

function fetchDataAndInsertCards() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

      for (let i = 0; i < 5; i++) {
        if (cardCount === 30) {
          break;
        }

        if (data[cardCount]) {
          const newCard = template.cloneNode(true);
          newCard.querySelector('.card__image').setAttribute('src', `img/content/card-img-${data[cardCount].id + 1}.jpg`);
          newCard.querySelector('.item__title').textContent = data[cardCount].title;
          newCard.querySelector('.item__subtitle').textContent = data[cardCount].title;
          newCard.querySelector('.item__description').textContent = data[cardCount].body;

          newCard.querySelector('.item__data span').textContent = authors[Math.floor(Math.random() * authors.length)];

          const currentYear = new Date().getFullYear();
          const randomMonth = Math.floor(Math.random() * 12) + 1;
          const randomDay = Math.floor(Math.random() * 31) + 1;

          const randomDate = `${currentYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;

          const timeElement = newCard.querySelector('.item__data time');
          timeElement.setAttribute('datetime', randomDate);
          timeElement.textContent = randomDate;

          cardsList.appendChild(newCard);

          cardCount++;
        }
      }

      if (cardCount === 30) {
        setTimeout(() => {
          moreBtn.style.display = 'none';
          alert('Выведено 30 карточек');
        }, 500);
      }
    });
}


moreBtn.addEventListener('click', fetchDataAndInsertCards);
