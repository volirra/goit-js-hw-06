const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;
  if (login.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};