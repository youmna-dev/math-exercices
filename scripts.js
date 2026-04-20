function checkResult() {
    const userAnswer = document.getElementById("user-input").value;
    const feedback = document.getElementById("feedback");
    
    // The correct answer for 12 x 3 is 36
    const correctAnswer = 36;

    if (userAnswer == correctAnswer) {
        feedback.innerHTML = "✅ Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Try again!";
        feedback.style.color = "red";
    }
}
