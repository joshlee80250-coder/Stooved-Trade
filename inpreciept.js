document.addEventListener("DOMContentLoaded", () => {
    'use strict';
    const sidebarButtons = document.querySelectorAll(".button-section .line");
    const generateBtn = document.querySelector(".generatebtn");
    const errorBox = document.allErrors || document.querySelector(".allErrors");
    const loaderOverlay = document.querySelector(".fineloader");
    const loaderFill = document.getElementById("loaderFill");
    const percentText = document.getElementById("percent");

    sidebarButtons.forEach(buttonWrapper => {
        buttonWrapper.addEventListener("click", () => {
            const invoiceEl = buttonWrapper.querySelector(".invoice");
            if (!invoiceEl) return; 

            sidebarButtons.forEach(btn => {
                btn.classList.remove("active");
                const innerInvoice = btn.querySelector(".invoice");
                if (innerInvoice) {
                    innerInvoice.classList.remove("active");
                }
            });
            
            buttonWrapper.classList.add("active");
            invoiceEl.classList.add("active");
            
            const mode = invoiceEl.textContent.trim();

            switch(mode) {
                case "Invoice":
                    window.location.href = 'index.html';
                    break;
                case "Receipt":
                    window.location.href = 'inpreciept.html';
                    break;

                    case "game":
                    window.location.href = 'Game.html';
                    break;

                    case "Calculator":
                    window.location.href = 'Calculator.html';
                    break;

                    case "Converter":
                    window.location.href = 'Converter.html';
                    break;

                    

                case "Estimate":
                    window.location.href = 'Estimate.html';
                    break;
                default:
                    console.log(`No routing rule matched for mode: ${mode}`);
            }
        });
    });

    function runInvoiceLoader(callback) {
        loaderOverlay.style.display = "flex";
        loaderFill.style.width = "0%";
        percentText.textContent = "0%";
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            loaderFill.style.width = `${progress}%`;
            percentText.textContent = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loaderOverlay.style.display = "none";
                    if (callback) callback();
                }, 400); 
            }
        }, 100); 
    }

    generateBtn.addEventListener("click", () => {
        errorBox.style.display = "none";
        errorBox.textContent = "";

        const receiptNo = document.querySelector(".inputReceiptNo").value.trim();
        const receiptDate = document.querySelector(".inputDate").value;
        const customerName = document.querySelector(".inputCustomerName").value.trim();
        const serviceDesc = document.getElementById("inputDescription").value.trim();
        const qty = parseFloat(document.getElementById("inputQty").value);
        const amount = parseFloat(document.getElementById("inputAmount").value);
        const discount = parseFloat(document.getElementById("inputDiscount").value) || 0;

        if (!receiptNo || !receiptDate || !customerName || !serviceDesc || isNaN(qty) || isNaN(amount)) {
            

                errorBox.textContent = "Please fill out all required fields with valid values.";
            errorBox.style.display = "block";
            return;
        }

        const grossTotal = qty * amount;
        const finalNetTotal = Math.max(0, grossTotal - discount);

        runInvoiceLoader(() => {
            const receiptSummary = {
                receiptNo,
                date: receiptDate,
                customer: customerName,
                phone: document.querySelector(".inputCustomerPhone").value.trim(),
                item: serviceDesc,
                quantity: qty,
                rate: amount,
                discount: discount,
                totalCalculated: finalNetTotal.toFixed(2)
            };

            console.log("Document compilation successful:", receiptSummary);
            
            localStorage.setItem("receiptSummary", JSON.stringify(receiptSummary));
            
            window.location.href = 'Reciept.html'; 
        });
    });
});


const Mainrecord=document.querySelector('.Sales');


Mainrecord.addEventListener('click',()=>{

window.location.href='Sales.html';
 })
