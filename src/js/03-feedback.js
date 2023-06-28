import { save, load } from './storage';
const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
let email = '';
let message = '';

onLoad();

feedbackForm.addEventListener('input', throttle(handleInput, 500));
feedbackForm.addEventListener('submit', handleSubmit);

/**
 * forms an object from typed values and saves in local storage
 */
function handleInput(evt) {
  if (evt.target.name === 'email') {
    email = evt.target.value;
  }
  if (evt.target.name === 'message') {
    message = evt.target.value;
  }
  save(KEY, { email, message });
}

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(load(KEY));
  evt.target.reset();
  save(KEY, { email: '', message: '' });
}

/**
 * restores form values from local storage
 * if storege has no values - aborts
 */
function onLoad() {
  savedInput = load(KEY);
  if (!savedInput) {
    return;
  }
  email = feedbackForm.elements.email.value = savedInput.email;
  message = feedbackForm.elements.message.value = savedInput.message;
}
