function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('lightmode');

  const img = document.querySelector("#profile img");
  if (html.classList.contains("lightmode")) {
   img.setAttribute('src', './logolight.png');
  } else {
    img.setAttribute('src', './logodark.png');
  }
}