'use strict'

const allButtonsCont = document.querySelector('.keys');
const calcDisplay = document.querySelector('.display');
const themeButton = document.getElementById('theme');

console.log(allButtonsCont, themeButton, calcDisplay);


allButtonsCont.addEventListener('click', (e) => {

    if (!e.target.classList.contains('key')) return

    if (e.target.classList.contains('action')) {

        if (e.target.textContent.toLowerCase() === 'ac') {
            calcDisplay.value = '';
            return;
        }

        if (e.target.textContent.toLowerCase() === 'del') {
            calcDisplay.value = calcDisplay.value.slice(0, -1);
            return;
        }
    }

    if (e.target.classList.contains('equals')) {
        let sanitizeVal = calcDisplay.value;

        if (sanitizeVal.includes('x')) {
            sanitizeVal = sanitizeVal.replaceAll('x', '*');
        } else if (sanitizeVal.includes('÷')) {
            sanitizeVal = sanitizeVal.replaceAll('÷', '/');
        }

        if (sanitizeVal.includes('%')) {
            sanitizeVal = sanitizeVal.replaceAll('%', '/100');
        }

        calcDisplay.value = eval(sanitizeVal);
        return;
    }




    if (calcDisplay.value.startsWith('0')) {
        calcDisplay.value = calcDisplay.value.slice(1);
    }

    calcDisplay.value += e.target.textContent;
});






const inv=document.querySelector('.inv');

const rec=document.querySelector('.Receipt');


const calculator=document.querySelector('.Calculator');


const converter=document.querySelector('.Converter');


const sales=document.querySelector('.Sales');

const games=document.querySelector('.games');

const l1=document.querySelector('.l1');
const l2=document.querySelector('.l2');
const l3=document.querySelector('.l3');
const l4=document.querySelector('.l4');
const l5=document.querySelector('.l5');
const l6=document.querySelector('.l6');


document.querySelector('.sub').addEventListener('click', function(){
    document.querySelector('.button-section').classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('active')
    
})



rec.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.add('active');

    l4.classList.remove('active');

    l5.classList.remove('active');

    l6.classList.remove('active');

    window.location.href='inpreciept.html';

})


inv.addEventListener('click',()=>{

    l1.classList.add('active');

    l3.classList.remove('active');

    l2.classList.remove('active');

    l4.classList.remove('active');


    l5.classList.remove('active');

    l6.classList.remove('active');

    window.location.href='index.html';

})



calculator.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.add('active');

    l2.classList.remove('active');

    l4.classList.remove('active');


    l5.classList.remove('active');

    l6.classList.remove('active');
    


})





converter.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.remove('active');

    l4.classList.add('active');


    l5.classList.remove('active');

    l6.classList.remove('active');

    window.location.href='Converter.html';


})




sales.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.remove('active');

    l4.classList.remove('active');


    l5.classList.add('active');

    l6.classList.remove('active');

    window.location.href='Sales.html';


})



games.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.remove('active');

    l4.classList.remove('active');


    l5.classList.remove('active');

    l6.classList.add('active');

    window.location.href='Game.html';


})

