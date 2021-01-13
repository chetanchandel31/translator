const inputEl = document.querySelector('#input');
const outputEl = document.querySelector('#output');
const dropdownEl = document.querySelector('#dropdown');
const translateBtnEl = document.querySelector('#btn-translate');
const clearBtnEl = document.querySelector('#btn-clear');

const constructURL = (input) => {
    return `https://api.funtranslations.com/translate/${dropdownEl.value}.json?text=${input}`
}

const translateHandler = () => {
    outputEl.value = 'translating...';
    fetch(constructURL(inputEl.value)).then(response => response.json()).then(json => {
        outputEl.value = json.contents.translated;
    }).catch(err => {
        alert(`something wrong with the server or per hour limit exhausted. ${err}`);
    })
}

const clearHandler = () => {
    inputEl.value = '';
}

translateBtnEl.addEventListener('click', translateHandler);
clearBtnEl.addEventListener('click', clearHandler);