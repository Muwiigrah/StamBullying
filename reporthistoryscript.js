// script.js

// Example function for handling delete actions
document.querySelectorAll('.actions button:nth-child(1)').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.report-item').remove();
    });
});

// Example function for handling reply actions
document.querySelectorAll('.actions button:nth-child(2)').forEach(button => {
    button.addEventListener('click', function() {
        alert('Reply function coming soon!');
    });
});

// Example function for handling notifications
document.querySelectorAll('.actions button:nth-child(3)').forEach(button => {
    button.addEventListener('click', function() {
        alert('Notification enabled for this report.');
    });
});
