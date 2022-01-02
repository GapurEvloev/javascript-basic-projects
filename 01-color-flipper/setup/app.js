const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let counter = 0;

btn.addEventListener("click", () => {
  if (counter < colors.length) {
    document.body.style.backgroundColor = colors[counter];
    color.textContent = colors[counter];
    counter++;

    if (counter === colors.length) {
      counter = 0;
    }
  }
});

// btn.addEventListener("click", () => {
//   let currentColorIndex = colors.findIndex(
//     (c) => c == document.body.style.backgroundColor
//   );
//   console.log({ currentColorIndex });
//   currentColorIndex =
//     currentColorIndex <= colors.length  ? currentColorIndex + 1 : 0;
//   console.log(document.body.style.backgroundColor);
//   document.body.style.backgroundColor = colors[currentColorIndex];
//   color.textContent = colors[currentColorIndex];
// });
