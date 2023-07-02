const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};
inputEl.addEventListener("input", function () {
  textEl.style.fontSize = inputEl.value + "px";
});
inputRangeRef.addEventListener("input", handleInput);