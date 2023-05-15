import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));


let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
populateMessageOutput();

function onFormSubmit(evt) {
 evt.preventDefault();

 console.log({ email: email.value, message: message.value });

 if (email.value === '' || message.value === '') {
  return alert('Please fill in all the fields')
 }
 evt.currentTarget.reset()
 localStorage.removeItem(STORAGE_KEY)
 dataForm = {};
};

function onInputData(evt) {

 dataForm = { email: email.value, message: message.value };

 localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));

};

function populateMessageOutput() {

 if (dataForm) {
  email.value = dataForm.email || '';
  message.value = dataForm.message || '';
 }
}


