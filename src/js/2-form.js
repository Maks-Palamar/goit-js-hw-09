const KEY = "feedback-form-state";

const form = document.querySelector('feedback-form');
inpSelector.addEventListener("input", inputListenFunc);

function inputListenFunc(event) {
    const name = form.elements.name.value;
    const message = form.elements.message.value;

    const userData = {
        name: name,
        message: message,
    }
}