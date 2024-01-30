const KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
form.addEventListener("input", inputListenFunc);

function inputListenFunc(event) {
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const userData = {
        email: email,
        message: message,
    }

saveToLS(KEY, userData);
}

function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function loadFromLS(key = 'mustbeakey') {
    const gotKey = localStorage.getItem(key);
    try {
      const result = JSON.parse(gotKey);
      return result;
    } catch {
      return gotKey;
    }
  }
  
form.addEventListener("submit", sendData);

function sendData(event) {
    event.preventDefault();
    loadFromLS(KEY);
    localStorage.removeItem(KEY);
    form.reset();
}

function inputData() {
    const gotData = loadFromLS(KEY) || {};
    form.elements.email.value = gotData.email || "";
    form.elements.message.value = gotData.message || "";
}

inputData();