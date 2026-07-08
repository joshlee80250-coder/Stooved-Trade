'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const signupBox = document.getElementById("signup-box");
    const loginBox = document.getElementById("login-box");
    
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    const toLogin = document.getElementById("to-login");
    const toSignup = document.getElementById("to-signup");



signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
    
    
    
    const savedUser = JSON.parse(localStorage.getItem("userCredentials"));
    
    if (savedUser) {
        signupBox.classList.add("hidden");
        loginBox.classList.remove("hidden");
    }
    
    toLogin.addEventListener("click", () => {
        signupBox.classList.add("hidden");
        loginBox.classList.remove("hidden");
    });
    
    toSignup.addEventListener("click", () => {
        loginBox.classList.add("hidden");
        signupBox.classList.remove("hidden");
    });
    
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const userName = email.split('@')[0]; 


        const credentials = { name: userName, email: email, password: password };
        localStorage.setItem("userCredentials", JSON.stringify(credentials));
    
        alert("Registration successful! Please login.");
        
        signupBox.classList.add("hidden");
        loginBox.classList.remove("hidden");
        signupForm.reset();
    });

    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = document.getElementById("login-email").value;
        const passwordInput = document.getElementById("login-password").value;
        
        const userData = JSON.parse(localStorage.getItem("userCredentials"));

        if (!userData) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (emailInput === userData.email && passwordInput === userData.password) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password!");
        }
    });
});
