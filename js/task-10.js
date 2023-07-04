function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBoxes() {
  inputEl.value = "";
  boxesEl.innerHTML = "";
}
function createBoxes(amount) {
  let boxArray = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += степ) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
  }
}