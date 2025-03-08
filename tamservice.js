// Function to open popups
document.querySelectorAll(".popup-btn").forEach(button => {
    button.addEventListener("click", function () {
        const popupId = this.getAttribute("data-popup");
        document.getElementById(popupId).style.display = "flex";
    });
});

// Function to close popups
document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
        this.parentElement.parentElement.style.display = "none";
    });
})// Function to open popups
document.querySelectorAll(".popup-btn").forEach(button => {
    button.addEventListener("click", function () {
        const popupId = this.getAttribute("data-popup");
        document.getElementById(popupId).style.display = "flex";
    });
});

// Function to close popups
document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
        this.parentElement.parentElement.style.display = "none";
    });
});

// Close popup when clicking outside content
window.addEventListener("click", function (event) {
    document.querySelectorAll(".popup").forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

// Login popup
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

// Close popup when clicking outside content
window.addEventListener("click", function (event) {
    document.querySelectorAll(".popup").forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
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