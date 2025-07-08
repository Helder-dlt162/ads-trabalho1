const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.onclick = () => {
  box.style.visibility = box.style.visibility === 'visible' ? 'hidden' : 'visible';
};
