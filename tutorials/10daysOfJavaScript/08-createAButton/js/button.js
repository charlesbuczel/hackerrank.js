const btn = document.createElement('button');
btn.innerHTML = 0;
btn.id = 'btn';
btn.onclick = () => {
  btn.innerHTML = parseInt(btn.innerHTML, 10) + 1;
}
document.body.appendChild(btn);
