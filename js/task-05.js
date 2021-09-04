const form = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', inputArea);
function inputArea(event) {
    let value = inputEl.value;
    if (value === "") {
        form.textContent = "незнакомец";
    } else {
        form.textContent = value;
    };
};