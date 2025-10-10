import { getRandomInt } from './random';

const miniBubble = document.createElement('span');
miniBubble.classList.add('mini-bubble');

export const appendMiniBubble = (count, parent) => {
  for (let i = 0; i < count; i++) {
    const cloned = miniBubble.cloneNode(true);
    cloned.style.setProperty('right', getRandomInt(0, 100) + '%');
    cloned.style.setProperty('top', getRandomInt(-30, 15) + '%');
    cloned.style.setProperty('scale', getRandomInt(100, 200) + '%');
    parent.appendChild(cloned);
  }
};
 

// const fixed_bubble = document.getElementById("fixed_bubble");
// const main = document.querySelector(".service-pages");

// main.addEventListener("scroll", (e) => {
//    console.log(main);

//   main.classList.add("active");
//   fixed_bubble.style.background = "red";
// });

 