
function openCalculator() {
    window.location.href = "./html/calculator.html"; 
}


function openRockPaperScissors() {
    window.location.href = "./html/rock_paper_scissors.html"; 
}


function openMultiplicationTable() {
    window.location.href = "./html/multiplication_table.html"; 
}


document.getElementById("calculatorBtn").addEventListener("click", openCalculator);
document.getElementById("rpsBtn").addEventListener("click", openRockPaperScissors);
document.getElementById("multiplicationTableBtn").addEventListener("click", openMultiplicationTable);
