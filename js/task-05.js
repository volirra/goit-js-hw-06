const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);
textInput.addEventListener("input", handleInput);
function handleInput() {
    if (textInput.value === "") {
        textOutput.textContent = "Anonymous";
    }
    textOutput.textContent = textInput.value;
}
 function handleInput() {
    
        textOutput.textContent = textInput.value.trim() || "Anonymous";

}