const calcBtn = document.querySelector(".calc-btn");

const yearsSpan = document.querySelector("#years-span");
const monthsSpan = document.querySelector("#months-span");
const daysSpan = document.querySelector("#days-span");

const inputs = {
  year: {
    label: document.querySelector("#year-input-label"),
    input: document.querySelector("#year-input"),
    error: document.querySelector("#year-error"),
    errorMessage: "Must be in the past",
    isValid() {
      const value = parseInt(this.input.value);
      return value && value > 0 && value <= new Date().getFullYear();
    },
  },
  month: {
    label: document.querySelector("#month-input-label"),
    input: document.querySelector("#month-input"),
    error: document.querySelector("#month-input-error"),
    errorMessage: "Must be a valid month",
    isValid() {
      const value = parseInt(this.input.value);
      return value && value > 0 && value <= 12;
    },
  },
  day: {
    label: document.querySelector("#day-input-label"),
    input: document.querySelector("#day-input"),
    error: document.querySelector("#day-error"),
    errorMessage: "Must be a valid day",
    isValid() {
      const value = parseInt(this.input.value);
      return value && value > 0 && value <= 31;
    },
  },
};

const validateInputs = () => {
  let error = false;

  Object.keys(inputs).forEach((key) => {
    const input = inputs[key];

    if (!input.isValid()) {
      input.label.classList.add("date-input-label-error");
      input.input.classList.add("date-input-error");
      error = true;
    } else {
      input.label.classList.remove("date-input-label-error");
      input.input.classList.remove("date-input-error");
    }
  });

  return error;
};

const setAge = () => {
  if (validateInputs()) return;

  const today = new Date();
  let current_day = today.getDay();
  let current_month = today.getMonth() + 1;
  let current_year = today.getFullYear();

  const birth_day = parseInt(inputs.day.input.value);
  const birth_month = parseInt(inputs.month.input.value);
  const birth_year = parseInt(inputs.year.input.value);

  const daysOfMonth = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birth_day > current_day) {
    current_day += daysOfMonth[birth_month];
    current_month -= 1;
  }

  if (birth_month > current_month) {
    current_month += 12;
    current_year -= 1;
  }

  const days = current_day - birth_day;
  const months = current_month - birth_month;
  const years = current_year - birth_year;

  yearsSpan.innerText = years;
  monthsSpan.innerText = months;
  daysSpan.innerText = days;
};

calcBtn.addEventListener("click", setAge);
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    ev.stopPropagation();
    setAge();
  }
});
