'use strict'


//  if (localStorage.getItem("isLoggedIn") !== "true") {
//             window.location.href = "index.html";
//         }else{
//             window.location.href="login.html"
//         }

//first page
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

document.querySelector('.sub').addEventListener('click', function(){
    document.querySelector('.button-section').classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('active')
    
})




document.querySelector('.faqs').addEventListener('click',function(){
    window.location.href='Faq.html';
})





document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const signupBtn = document.querySelector(".Signup"); 

    if (signupBtn) {
        if (isLoggedIn) {
            const userData = JSON.parse(localStorage.getItem("userCredentials"));
            signupBtn.classList.add('active');
            
            if (userData && userData.name) {
                const shortName = userData.name.slice(0, 5);
                signupBtn.textContent = `${shortName}▼`;
            }

            signupBtn.addEventListener('click', function() {
                window.location.href = 'index.html'; 
            });

        } else {
            signupBtn.addEventListener('click', function() {
                window.location.href = 'login.html';
            });
        }
    }
});




const generateBtn = document.querySelector('.generatebtn');
const allErrors = document.querySelector('.allErrors');

allErrors.textContent = '';
allErrors.classList.remove('active');

generateBtn.addEventListener('click', function() {
    
    console.log('clicked');
    
    allErrors.innerHTML = '';
    allErrors.classList.remove('active');
    
    const companyName = document.querySelector('.column .invoice-input:nth-of-type(1) input');
    const companyMotto = document.querySelector('.column .invoice-input:nth-of-type(2) input');
    const companyDate = document.querySelector('.column .invoice-input:nth-of-type(3) input');
    
    const clientName = document.querySelector('.flex1 .invoice-input:nth-of-type(1) input');
    const clientPhone = document.querySelector('.flex1 .invoice-input:nth-of-type(2) input');
    const clientAddress = document.querySelector('.flex1 .invoice-input:nth-of-type(3) input');
    
    const itemPrice = document.querySelector('.calc div:nth-of-type(1) .invoice-input:nth-of-type(1) input');
    const itemService = document.querySelector('.calc div:nth-of-type(1) .invoice-input:nth-of-type(2) input');
    const itemQuantity = document.querySelector('.calc div:nth-of-type(1) .invoice-input:nth-of-type(3) input');
    
    let emptyCount = 0;
    const totalFields = 9;
    
    if (companyName.value.trim() === '') emptyCount++;
    if (companyMotto.value.trim() === '') emptyCount++;
    if (companyDate.value.trim() === '') emptyCount++;
    if (clientName.value.trim() === '') emptyCount++;
    if (clientPhone.value.trim() === '') emptyCount++;
    if (clientAddress.value.trim() === '') emptyCount++;
    if (itemPrice.value.trim() === '') emptyCount++;
    if (itemService.value.trim() === '') emptyCount++;
    if (itemQuantity.value.trim() === '') emptyCount++;
    
    if (emptyCount > 0) {
        allErrors.classList.add('active');
        if (emptyCount === totalFields) {
            allErrors.textContent = 'Add details';
        } else {
            allErrors.textContent = 'Fill in complete details';
        }
        
        setTimeout(function() {
            allErrors.textContent = '';
            allErrors.classList.remove('active');
        }, 4000);
        
    } else {
        const invDetails = {
            name: companyName.value,
            motto: companyMotto.value,
            date: companyDate.value,
            cname: clientName.value,
            cphone: clientPhone.value,
            caddress: clientAddress.value,
            price: itemPrice.value,
            service: itemService.value,
            quantity: itemQuantity.value
        };

        localStorage.setItem('invoiceData', JSON.stringify(invDetails));

        document.querySelector('.fineloader').classList.add('active');
        let progress = 0;
        
        const fill = document.getElementById("loaderFill");
        const percent = document.getElementById("percent");
        
        const interval = setInterval(() => {
            progress++;
            
            fill.style.width = progress + "%";
            percent.textContent = progress + "%";
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 40);
        
        setTimeout(function() {
            document.querySelector('.t1').textContent = ' Working on it.....';
        }, 1500);

        setTimeout(function() {
            window.location.href = 'Invresult.html'; 
        }, 4100);
    }
});



// const faqs=document.querySelector('.faqs')

// const faqQuestions = document.querySelectorAll('.faq-question');

// faqs.addEventListener('click',()=>{

//         window.location.href = 'faq.html'; 
    

    
// })








