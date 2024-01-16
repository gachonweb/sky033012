function generateGugudan() {
    let gugudanInput = document.getElementById('gugudanInput');
    let gugudanOutput = document.getElementById('gugudanOutput');

    gugudanOutput.innerHTML = '';

    if (gugudanInput.value >= 1 && gugudanInput.value <= 9) {
        for (let i = 1; i <= 9; i++) {
            let result = gugudanInput.value * i;
            gugudanOutput.innerHTML += `${gugudanInput.value} x ${i} = ${result}<br>`;
        }
    } else {
        gugudanOutput.innerHTML = '1부터 9까지의 숫자를 입력해주세요.';
    }
}

function goToIndex() {
    window.location.href = '../index.html';
}
