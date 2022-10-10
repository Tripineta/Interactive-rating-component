const cardRate = document.querySelector(".card_rate");
const cardRateSent = document.querySelector(".card_rate_sent");
const buttonSubmit = document.querySelector(".button_submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".button_rate");

buttonSubmit.addEventListener("click", () => {
    cardRate.classList.add("hidden");
    cardRateSent.classList.remove("hidden");
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})