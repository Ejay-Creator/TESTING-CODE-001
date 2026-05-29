// script.js

// Button interaction
const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});

// Form submission
const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  response.textContent = `Thank you, ${name}! Your message has been sent.`;

  form.reset();
});