let counter = 0;
const counterElement = document.getElementById('counter');
const tapBtn = document.getElementById('tap-btn');

tapBtn.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
});
