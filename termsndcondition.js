// Function to show the popup
        function showPopup() {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("termsPopup").style.display = "block";
        }

        // Function to close the popup
        function closePopup() {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("termsPopup").style.display = "none";
        }

        // Function when the user accepts the terms
        function acceptTerms() {
            alert("You have accepted the Terms & Conditions.");
            closePopup();
        }

        // Function when the user rejects the terms
        function rejectTerms() {
            alert("You have rejected the Terms & Conditions.");
            closePopup();
        }

        // Show popup on page load
        window.onload = function() {
            showPopup();
        };