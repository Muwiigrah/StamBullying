document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeBtn = document.querySelector(".close");
    const signInBtn = document.getElementById("signInBtn");
    const anonymousBtn = document.getElementById("anonymousBtn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error"); // Email error message
    const passwordError = document.getElementById("password-error"); // Password error message
    const successPopup = document.getElementById("successPopup"); // Login success popup
    const closeSuccessPopup = document.getElementById("closeSuccessPopup"); // Close success popup button

    // Show login popup when clicking the login button
    loginBtn.addEventListener("click", function () {
        loginPopup.style.display = "flex";
    });

    // Close login popup when clicking the close button (X)
    closeBtn.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });

    // Close login popup when clicking outside the popup content
    window.addEventListener("click", function (event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });

    // Log In Button: Show errors only when clicking "Log in" without input
    signInBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let hasError = false;

        // Check email field (Only show error if Log In is clicked)
        if (email === "") {
            emailError.textContent = "Please enter your school email.";
            emailError.style.visibility = "visible";
            hasError = true;
        } else {
            emailError.style.visibility = "hidden";
        }

        // Check password field (Only show error if Log In is clicked)
        if (password === "") {
            passwordError.textContent = "Please enter your password.";
            passwordError.style.visibility = "visible";
            hasError = true;
        } else {
            passwordError.style.visibility = "hidden";
        }

        // If no errors, show login success popup
        if (!hasError) {
            loginPopup.style.display = "none"; // Close login popup
            successPopup.style.display = "flex"; // Show success popup
        }
    });

    // Close success popup when clicking "OK"
    closeSuccessPopup.addEventListener("click", function () {
        successPopup.style.display = "none";
    });

    // Remain Anonymous Button: Just closes the popup immediately
    anonymousBtn.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });
});
// Function to show the Terms & Conditions popup
function showPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("termsPopup").style.display = "block";
}

// Function to close the Terms & Conditions popup
function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("termsPopup").style.display = "none";
}

// Function to show the warning popup if user rejects
function showWarningPopup() {
    document.getElementById("warningOverlay").style.display = "block";
    document.getElementById("warningPopup").style.display = "block";
}

// Function to close the warning popup
function closeWarningPopup() {
    document.getElementById("warningOverlay").style.display = "none";
    document.getElementById("warningPopup").style.display = "none";
}

// Function when the user accepts the terms
function acceptTerms() {
    closePopup();
}

// Function when the user rejects the terms
function rejectTerms() {
    closePopup(); // Close the Terms & Conditions popup
    showWarningPopup(); // Show the warning popup
}

// Show Terms & Conditions popup on page load
window.onload = function() {
    showPopup();
};
