'use strict'

const products = [

{
emoji:"🍅",
name:"Tomatoes",
price:1500
},

{
emoji:"🥚",
name:"Egg Tray",
price:7000
},

{
emoji:"🍚",
name:"Rice (5kg)",
price:9500
},

{
emoji:"🍞",
name:"Bread",
price:1800
},

{
emoji:"🥭",
name:"Mango Basket",
price:5000
},

{
emoji:"🐟",
name:"Fresh Fish",
price:4000
},

{
emoji:"🧅",
name:"Onions",
price:2500
},

{
emoji:"🍌",
name:"Bananas",
price:3000
}

];

let score = 0;

let currentProduct;

const emoji = document.getElementById("emoji");
const itemName = document.getElementById("itemName");
const options = document.getElementById("options");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

function randomOptions(correct){

    let answers=[correct];

    while(answers.length<4){

        let random=Math.floor(Math.random()*9000)+1000;

        random=Math.round(random/100)*100;

        if(!answers.includes(random))
            answers.push(random);

    }

    answers.sort(()=>Math.random()-0.5);

    return answers;

}

function loadQuestion(){

    result.textContent="";

    options.innerHTML="";

    currentProduct=products[Math.floor(Math.random()*products.length)];

    emoji.textContent=currentProduct.emoji;

    itemName.textContent=currentProduct.name;

    const answers=randomOptions(currentProduct.price);

    answers.forEach(price=>{

        const btn=document.createElement("button");

        btn.textContent="₦"+price.toLocaleString();

        btn.onclick=()=>checkAnswer(btn,price);

        options.appendChild(btn);

    });

}

function checkAnswer(button,price){

    const buttons=document.querySelectorAll("#options button");

    buttons.forEach(btn=>btn.disabled=true);

    if(price===currentProduct.price){

        button.classList.add("correct");

        result.textContent="✅ Correct";

        score++;

        scoreText.textContent=score;

    }else{

        button.classList.add("wrong");

        result.textContent="❌ Wrong";

        buttons.forEach(btn=>{

            if(btn.textContent==="₦"+currentProduct.price.toLocaleString()){

                btn.classList.add("correct");

            }

        });

    }

}

document.getElementById("nextBtn").onclick=loadQuestion;

loadQuestion();



document.querySelector('.Exit').addEventListener('click', function(){
    window.location.href='Game.html'
})
