const formData = {
    email: "",
    message: ""
  };
  
// Selecting the form and its elements
const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

// Function to save formData to localStorage
function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Function to load formData from localStorage
function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

// Function to update formData and save to localStorage on input
function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
}

// Function to populate form with data from localStorage on page load
function populateForm() {
  const savedData = loadFromLocalStorage();
  if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  form.reset();
}

// Event listeners
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

// Populate form on page load
document.addEventListener('DOMContentLoaded', populateForm);