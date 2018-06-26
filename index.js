'use strict';

/* eslint-env browser */

function setResultValue(value) {
    const result = document.getElementById('resultValue');
    result.textContent = value;
}

function submitForm(event) {
    event.preventDefault();
    setResultValue(event.target.myValue.value);
}

function clickForm(event) {
    event.preventDefault();
    setResultValue(document.secondForm.myValue.value);
}
