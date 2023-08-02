const ratingSection = document.querySelector(".rating-section");
const thankyouSection = document.querySelector(".thankyou-section");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const selectedRating = document.querySelector(".selected-rating");
let rating = 0;

for (let ratingBtn of ratingBtns) {
  ratingBtn.addEventListener("click", function () {
    for (let ratingBtn of ratingBtns) {
      ratingBtn.classList.remove("curr-rating");
    }
    this.classList.add("curr-rating");
    rating = parseInt(this.innerText);
  });
}

submitBtn.addEventListener("click", () => {
  selectedRating.innerText = `You selected ${rating} out of 5`;
  ratingSection.classList.add("inactive-section");
  thankyouSection.classList.remove("inactive-section");
});
