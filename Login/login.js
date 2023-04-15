function checkPassword() {
    // event.preventDefault(); // Остановить отправку формы
  let password = document.getElementById("psw").value;
  let error = document.getElementById("error");

  if (password !== "mypassword") {
    document.getElementById("error").style.display = "block";
    document.getElementById("psw").style.border = "0.5px solid red";
  } 
  else {
    error.style.display = "none";
  }
}

const passwordInput = document.getElementById("psw");
const togglePasswordButton = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eye-icon");

togglePasswordButton.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  eyeIcon.setAttribute("src", type === "password" ? "Files/vectorShow.svg" : "Files/vectorHide.svg");
});

let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('burger-menu-list');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});