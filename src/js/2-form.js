const KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
form.addEventListener("input", inputListenFunc);

/*const mailInput = form.elements.email;
mailInput.setAttribute('required', true);*/

function inputListenFunc(event) {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

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
      const result = JSON.parse(gotKey) || {};
      return result || {};
    } catch {
      return gotKey;
    }
  }
  
form.addEventListener("submit", sendData);

function sendData(event) {
  event.preventDefault();
  
  if (form.elements.email.value !== "" && form.elements.message.value !== "") {
    const userData = loadFromLS(KEY);
    console.log('User Data:', userData);
    localStorage.removeItem(KEY);
    form.reset();
  } else {
    console.log("All fields must be filled!");
  }
    
}

function inputData() {
    const gotData = loadFromLS(KEY) || "";
    form.elements.email.value = gotData.email || "";
  form.elements.message.value = gotData.message || "";
  console.log('Data loaded to form:', gotData);
    
}

inputData();