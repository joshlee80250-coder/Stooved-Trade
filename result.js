'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const savedData = localStorage.getItem('invoiceData');
    
    if (!savedData) {
        console.error('No invoice data found!');
        return;
    }
    
    const invoice = JSON.parse(savedData);

    const numericPrice = parseFloat(invoice.price) || 0;
    const numericQty = parseInt(invoice.quantity) || 0;
    
    const calculatedSubtotal = numericPrice * numericQty;
    const calculatedTax = calculatedSubtotal * 0.075; 
    const calculatedGrandTotal = calculatedSubtotal + calculatedTax;

    document.querySelector('.cnameresult').textContent = invoice.name;
    document.querySelector('.cmottoresult').textContent = invoice.motto;
    document.getElementById('invoiceDate').textContent = invoice.date;
    
    document.getElementById('customerName').textContent = invoice.cname;
    document.getElementById('customerPhone').textContent = invoice.cphone;
    document.getElementById('customerAddress').textContent = invoice.caddress;
    
    document.getElementById('service1').textContent = invoice.service;
    document.getElementById('qty1').textContent = numericQty;
    document.getElementById('price1').textContent = '₦' + numericPrice.toLocaleString();
    document.getElementById('total1').textContent = '₦' + calculatedSubtotal.toLocaleString();
    
    document.getElementById('subtotal').textContent = '₦' + calculatedSubtotal.toLocaleString();
    document.getElementById('tax').textContent = '₦' + calculatedTax.toLocaleString();
    document.getElementById('grandTotal').textContent = calculatedGrandTotal.toLocaleString();
    
    document.querySelector('.tnks-name').textContent = invoice.name;
});






const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function () {

    const invoice = document.getElementById("invoice");

    html2canvas(invoice, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff"
    }).then(function (canvas) {

        const link = document.createElement("a");

        link.download = "Invoice_" + document.getElementById("invoiceNo").textContent + ".png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

    setInterval(function () {
        document.querySelector('.popup').classList.add('active');
    } , 1000);

    document.getElementById('closePopup').addEventListener('click', function () {
        return window.location.href = 'index.html';
        const calc=number[0+1];
        console.log(calc);
    })

    });