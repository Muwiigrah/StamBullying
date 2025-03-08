document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeBtn = document.querySelector(".close");
    const signInBtn = document.getElementById("signInBtn");
    const anonymousBtn = document.getElementById("anonymousBtn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Open Login Popup
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            loginPopup.style.display = "flex";
            emailError.style.visibility = "hidden";
            passwordError.style.visibility = "hidden";
        });
    }

    // Close Popup when clicking the "X" button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            loginPopup.style.display = "none";
        });
    }

    // Close Popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });

    // Handle Login Button Click (Validation)
    if (signInBtn) {
        signInBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents page reload

            let hasError = false;

            if (emailInput && emailInput.value.trim() === "") {
                emailError.textContent = "• Please enter your school email.";
                emailError.style.visibility = "visible";
                hasError = true;
            } else {
                emailError.style.visibility = "hidden";
            }

            if (passwordInput && passwordInput.value.trim() === "") {
                passwordError.textContent = "• Please enter your password.";
                passwordError.style.visibility = "visible";
                hasError = true;
            } else {
                passwordError.style.visibility = "hidden";
            }

            if (!hasError) {
                alert("Log in successful!");
                loginPopup.style.display = "none";
            }
        });
    }

    // Handle "Remain Anonymous" Button Click
    if (anonymousBtn) {
        anonymousBtn.addEventListener("click", function () {
            loginPopup.style.display = "none";
        });
    }
});
const form = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginFormDiv = document.getElementById('loginPopup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  // Hardcoded credentials for the specified account
  const specifiedUsername = 'user123';
  const specifiedPassword = 'pass123';
  
  if (username === specifiedUsername && password === specifiedPassword) {
    loginFormDiv.innerHTML = 'Login Successful';
  } else {
    loginFormDiv.innerHTML = 'Login Failed';
  }
});