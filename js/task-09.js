function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');


const makeBgColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

button.addEventListener('click', makeBgColor)


