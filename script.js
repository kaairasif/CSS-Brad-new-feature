const btn = document.querySelector(".toggle-card");
const card = document.querySelector(".card");

btn.addEventListener("click", () => {
  card.classList.toggle("show");
});

// Table even row delete

const allHideButtons = document.querySelectorAll(".table .hide");

allHideButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest("tr").classList.add("hidden");
  });
});
