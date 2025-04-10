const catGif = document.querySelector(".catGif img");
const inputs = document.querySelectorAll(".inputs input");

const catGifFrames = [
  "assets/img/cat/frame-2.gif",
  "assets/img/cat/frame-3.gif",
];
let index = 0;
inputs.forEach((input) => {
  input.addEventListener("keypress", () => {
    console.log(index);
    catGif.src = catGifFrames[index]; // 1
    index++; // 2
    if (index >= catGifFrames.length) {
      index = 0;
    }
  });

  input.addEventListener("keyup", () => {
    catGif.src = "assets/img/cat/frame-1.gif";
  });
});
