'use strict'


document.querySelector('.home').addEventListener('click',()=>{
    window.location.href='index.html';
})



const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

const page=card.dataset.link;

window.location.href='fruitprize.html';

});

});
