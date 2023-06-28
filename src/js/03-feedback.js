// import { save, load } from './storage';
var throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';

// onLoad();

feedbackForm.addEventListener('input', throttle(handleInput, 500));
// feedbackForm.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  //   save(KEY, {
  //     email: evt.currentTarget.email.value,
  //     message: evt.currentTarget.message.value,
  //   });
  console.log(evt.currentTarget);
  //   console.log(evt.currentTarget.message.value);
}

// function handleSubmit(evt) {
//   evt.preventDefault;
// }

// function onLoad() {
//   savedInput = load(KEY);
//   if (!savedInput) {
//     return;
//   }
//   feedbackForm.elements.email.value = savedInput.email;
//   feedbackForm.elements.message.value = savedInput.message;
// }
