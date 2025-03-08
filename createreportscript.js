document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show a confirmation pop-up
    Swal.fire({
        title: "Report Submitted!",
        text: "Your report has been successfully created and recorded.",
        icon: "success",
        confirmButtonText: "OK"
    });

    this.reset();
});

function submitAnswer(questionId) {
    let answer = document.getElementById(questionId).value;
    let board = document.getElementById("reflectionBoard");
    let placeholder = document.getElementById("placeholderText");

    if (answer.trim() !== "") {
        let note = document.createElement("div");
        note.className = "post-it";
        note.textContent = answer;
        note.setAttribute("draggable", true);
        note.addEventListener("dragstart", dragStart);
        board.appendChild(note);
        document.getElementById(questionId).value = "";

        if (placeholder) {
            placeholder.style.display = "none";
        }
    }

    Swal.fire({ 
        title: "Step Completed! 🎉",
        text: "You've taken the first step toward healing. Keep expressing yourself and moving forward! 💛",
        icon: "success",
        confirmButtonText: "OK"
    });
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}