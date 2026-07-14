'use strict'


const invoice=document.querySelector('.inv');

const receipt=document.querySelector('.Receipt');


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




receipt.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.add('active');

    l4.classList.remove('active');

    l5.classList.remove('active');

    l6.classList.remove('active');

    window.location.href='inpreciept.html';

})


invoice.addEventListener('click',()=>{

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
    
    window.location.href='Calculator.html';


})





converter.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.remove('active');

    l4.classList.add('active');


    l5.classList.remove('active');

    l6.classList.remove('active');


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


document.querySelector('.sub').addEventListener('click', function(){
    document.querySelector('.button-section').classList.toggle('active')
    
})

const firstInput=document.getElementById('firstnum');
const secondInput=document.getElementById('secondnum');
const click=document.getElementById('click');

const firstInputm=document.getElementById('type1');
const secondInputm=document.getElementById('type2');
const clickm=document.getElementById('click2');

const firstInputn=document.getElementById('type3');
const secondInputn=document.getElementById('type4');
const clickn=document.getElementById('click3');


const firstInputo=document.getElementById('type5');
const secondInputo=document.getElementById('type6');
const clicko=document.getElementById('click4');


const firstInputp=document.getElementById('type7');
const secondInputp=document.getElementById('type8');
const clickp=document.getElementById('click5');


const firstInputq=document.getElementById('type9');
const secondInputq=document.getElementById('type10');
const clickq=document.getElementById('click6');


const firstInputr=document.getElementById('type11');
const secondInputr=document.getElementById('type12');
const clickr=document.getElementById('click7');


const firstInputs=document.getElementById('type13');
const secondInputs=document.getElementById('type14');
const clicks=document.getElementById('click8');


console.log(firstInput,secondInput,click,firstInputm,secondInputm,clickm,firstInputn,secondInputn,clickn,firstInputo,secondInputo,clicko,firstInputp,secondInputp,clickp,firstInputq,secondInputq,clickq,firstInputr,secondInputr,clickr,firstInputs,secondInputs,clicks);



function handleCal(){
const Input=firstInput.value;    

const Input2 = Input / 1000;
secondInput.value= Input2;



}

function handleCalcu(){
const Input=firstInputm.value;    

const Input2 = Input / 100;
secondInputm.value= Input2;

}


function handleCalcul(){
const Input=firstInputn.value;    

const Input2 = Input / 2.205;
secondInputn.value= Input2;

}



function handleCalcula(){
const Input=firstInputo.value;    

const Input2 = Input*90/5+32;
secondInputo.value= Input2;

}


function handleCalculat(){
const Input=firstInputp.value;    

const Input2 = Input*60;
secondInputp.value= Input2;

}


function handleCalculati(){
const Input=firstInputq.value;    

const Input2 = Input*60;
secondInputq.value= Input2;

}


function handleCalculatio(){
const Input=firstInputr.value;    

const Input2 = Input*2.54;
secondInputr.value= Input2;

}

function handleCalculation(){
const Input=firstInputs.value;    

const Input2 = Input /1600;
                    secondInputs.value= Input2;

}                    

click.addEventListener('click',handleCal);
firstInput.addEventListener('input',handleCal)


clickm.addEventListener('click',handleCalcu);
firstInputm.addEventListener('input',handleCalcu)



clickn.addEventListener('click',handleCalcul);
firstInputn.addEventListener('input',handleCalcul)



clicko.addEventListener('click',handleCalcula);
firstInputo.addEventListener('input',handleCalcula)



clickp.addEventListener('click',handleCalculat);
firstInputp.addEventListener('input',handleCalculat)



clickq.addEventLister('click',handleCalculati);
firstInputq.addEventListener('input',handleCalculati)

clickr.addEventListener('click',handleCalculatio);
firstInputr.addEventListener('input',handleCalculatio)

clicks.addEventListener('click',handleCalculation);
firstInputs.addEventListener('input',handleCalculation)




