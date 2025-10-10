const teamdetail = document.querySelectorAll(".front");
const card = document.querySelectorAll(".employ-card");
const behindcard = document.querySelectorAll(".behind-card");

teamdetail.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("close");

    elem.parentElement.classList.add("open");
  });
});
const employ_back = document.querySelectorAll(".behind-card");
employ_back.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("open");
    elem.parentElement.classList.add("close");
    ("open");
  });
});

teamdetail.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("close");

    elem.parentElement.classList.add("open");
  });
});

// const teamdetail = document.querySelectorAll(".employ_detail");
//   teamdetail.forEach((elem) => {
//   elem.addEventListener("click", (e) => {

// elem.parentElement.parentElement.style.display = "none";  });
// });
// console.log("jjh");
// const employ_back = document.querySelectorAll(".employ_back");
// // const cardd = employ_back.querySelectorAll(".employ-card");

// employ_back.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     card.forEach((e) => {
//       e.classList.remove("open");
//     });
//   });
// });

// const teamcard = document.querySelector("employ-card");
// const  card = document.querySelector("employ-card");

// teamdetail.forEach((elem) => {

// });

const faq_card = document.querySelectorAll(".faq-card__title-wrapper");
faq_card.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("close");
    elem.parentElement.classList.add("open");
  });
});
const faq_card_wrapper = document.querySelectorAll(
  ".faq-card__content-wrapper"
);
faq_card_wrapper.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("open");

    elem.parentElement.classList.add("close");
  });
});
