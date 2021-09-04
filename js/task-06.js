const inputChange = document.querySelector('#validation-input');
const dataLength = Number(inputChange.getAttribute('data-length'));
inputChange.addEventListener('blur', blurInputArea);

function blurInputArea() {
    if (dataLength === inputChange.value.length) {
        inputChange.classList.remove = ('invalid')
        inputChange.classList = ('valid')
    } else {
         inputChange.classList.remove = ('valid')
        inputChange.classList = ('invalid')
    }
}