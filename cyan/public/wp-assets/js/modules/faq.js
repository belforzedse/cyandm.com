const separator = document.querySelector(".separator");
if (separator) {
  separator.innerHTML = `<svg class="icon text-cyn-1 w-[24px]"><use href="#icon-Arrow-6"/></svg>`;
}

const FAQ_Tab = document.querySelectorAll(".faqtab");
const FAQ_Content = document.querySelectorAll(".faqcontent");

FAQ_Tab.forEach((elem) => {
  const tab_id = elem.getAttribute("term-id");

  elem.addEventListener("click", () => {
    FAQ_Tab.forEach((tab) => {
      tab.classList.remove("color");
    });

    FAQ_Content.forEach((e) => {
      e.classList.remove("active");
      const content_id = e.getAttribute("term-id");

      if (tab_id == content_id) {
        elem.classList.add("color");
        e.classList.add("active");
      }
    });
  });
});
