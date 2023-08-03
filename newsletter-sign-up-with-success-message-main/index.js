const emailInputError = document.querySelector(".email-input-error");
const emailInput = document.querySelector(".email-input");
const emailForm = document.querySelector(".email-form");
const emailSubmitBtn = document.querySelector(".email-submit-btn");
const userEmail = document.querySelector(".user-email");
const submitPage = document.querySelector(".page1");
const thankyouPage = document.querySelector(".page2");
const dismissBtn = document.querySelector(".dismiss-btn");

emailForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  if (emailInput.checkValidity()) {
    const { value } = emailInput;
    userEmail.innerText = value;
    submitPage.classList.add("hidden");
    thankyouPage.classList.remove("hidden");
  } else {
    emailInput.classList.add("input-error");
    emailInputError.classList.remove("hidden");
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value && !emailInput.checkValidity()) {
    emailInput.classList.add("input-error");
    emailInputError.classList.remove("hidden");
  } else {
    emailInput.classList.remove("input-error");
    emailInputError.classList.add("hidden");
  }
});

dismissBtn.addEventListener("click", () => {
  submitPage.classList.remove("hidden");
  thankyouPage.classList.add("hidden");
});
