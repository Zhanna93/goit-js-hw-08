// import Lodash from "lodash.throttle";

// localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));

const form = document.querySelector("form")

console.log(form)

form.addEventListener('input', ({ target: { value } }) => {
 localStorage.setItem('feedback-form-state', JSON.stringify({ email: value, message: value }))
})
