'use strict'


document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const receiptData = JSON.parse(localStorage.getItem("receiptSummary"));

    if (!receiptData) {
        alert("No receipt data found.");
        window.location.href = "inpreciept.html";
        return;
    }

    document.getElementById("receiptNo").textContent = receiptData.receiptNo;
    document.getElementById("receiptDate").textContent = receiptData.date;
    document.getElementById("customerName").textContent = receiptData.customer;
    document.getElementById("customerPhone").textContent = receiptData.phone;
    document.getElementById("description").textContent = receiptData.item;
    document.getElementById("qty").textContent = receiptData.quantity;
    document.getElementById("amount").textContent = Number(receiptData.rate).toFixed(2);

    const subtotal = Number(receiptData.quantity) * Number(receiptData.rate);

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("discount").textContent = Number(receiptData.discount).toFixed(2);
    document.getElementById("totalPaid").textContent = Number(receiptData.totalCalculated).toFixed(2);
});







document
.getElementById("downloadReceipt")
.addEventListener("click", () => {

    html2canvas(document.getElementById("receipt"),{

        scale:3,

        useCORS:true

    }).then(canvas=>{

        const link=document.createElement("a");

        link.download="Receipt.png";

        link.href=canvas.toDataURL("image/png");

        link.click();

    });

    setInterval(function () {
        document.querySelector('.popup').classList.add('active');
    } , 1000);

    document.getElementById('closePopup').addEventListener('click', function () {
        return window.location.href = 'inpreciept.html';
        const calc=number[0+1];
        console.log(calc);
    })

});




