function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector('#controls');
console.log(form.children[0]);
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes'); 
// console.log(boxes);

console.log(buttonCreate.textContent);
console.log(buttonDestroy.textContent);

buttonCreate.addEventListener('click', onClick);
buttonDestroy.addEventListener('click', delClick)

function onClick(event) {
  const div = document.createElement('div');
  div.style.width = '30px';
  div.style.height = '30px';
  div.style.backgroundColor = getRandomHexColor();
  boxes.append(div);
}

function delClick(event) {
  boxes.classList.remove('#boxes');
 
}
  

// const div = function onClick(event) {
  
  

//   return div;
// }




function createBoxes(amount) {
  
}