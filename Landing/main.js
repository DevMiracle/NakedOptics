let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('burger-menu-list');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
