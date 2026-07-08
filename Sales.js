"use strict";





const saveBtn = document.getElementById("saveBtn");
const table = document.getElementById("salesTable");
const totalToday = document.getElementById("todayTotal");
const clearBtn = document.getElementById("clearBtn");

let sales = JSON.parse(localStorage.getItem("dailySales")) || [];

function saveStorage(){
    localStorage.setItem("dailySales",JSON.stringify(sales));
}

function loadSales(){
    
    table.innerHTML="";
    
    let total=0;
    
    sales.forEach((sale,index)=>{
        
        total+=sale.total;
        
        table.innerHTML+=`
        <tr>
        <td>${sale.date}</td>
        <td>${sale.product}</td>
        <td>${sale.qty}</td>
        <td>₦${sale.price.toFixed(2)}</td>
        <td>₦${sale.total.toFixed(2)}</td>
        <td>
        <button class="deleteBtn" onclick="deleteSale(${index})">
        Delete
        </button>
        </td>
        </tr>
        `;
    });
    
    totalToday.textContent=total.toFixed(2);
    
}

saveBtn.addEventListener("click",()=>{
    
    const date=document.getElementById("date").value;
    const product=document.getElementById("product").value.trim();
    const qty=Number(document.getElementById("qty").value);
    const price=Number(document.getElementById("price").value);
    
    if(date===""||product===""||qty<=0||price<=0){
        alert("Fill all fields correctly.");
        return;
    }
    
    const sale={
        date,
        product,
        qty,
        price,
        total:qty*price
    };
    
    sales.push(sale);
    
    saveStorage();
    
    loadSales();
    
    document.getElementById("product").value="";
    document.getElementById("qty").value="";
    document.getElementById("price").value="";
});

function deleteSale(index){
    
    sales.splice(index,1);
    
    saveStorage();
    
    loadSales();
    
}

window.deleteSale=deleteSale;

clearBtn.addEventListener("click",()=>{
    
    if(confirm("Delete all sales records?")){
        
        sales=[];
        
        saveStorage();
        
        loadSales();
        
    }
    
});

loadSales();


const invoice=document.querySelector('.inv');

const receipt=document.querySelector('.Receipt');


const calculator=document.querySelector('.Calculator');


const converter=document.querySelector('.Converter');


const Mainrecord=document.querySelector('.Sales');

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

    window.location.href='Converter.html';

})




Mainrecord.addEventListener('click',()=>{

    l1.classList.remove('active');

    l3.classList.remove('active');

    l2.classList.remove('active');

    l4.classList.remove('active');


    l5.classList.add('active');

    l6.classList.remove('active');



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

