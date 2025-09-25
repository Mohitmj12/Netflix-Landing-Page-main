let languageBtn = document.getElementById("language-btn");
let faqItems = document.querySelectorAll(".faq ul li");

languageBtn.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show");
});

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show");
  });
});
