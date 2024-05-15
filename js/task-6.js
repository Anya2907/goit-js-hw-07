function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', onClick);
buttonDestroy.addEventListener('click', destroyBoxes);

function onClick(evt) {  
  const amount = input.value;  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }  
}

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++){   
    const div = document.createElement('div');

    div.style.width = 30 + (i * 10) + 'px';
    div.style.height = 30 + (i * 10) + 'px';
    div.style.backgroundColor = getRandomHexColor();

    boxes.append(div);    
  }
  input.value = '';
}

function destroyBoxes(evt) {
  boxes.innerHTML = ''; 
}
  

