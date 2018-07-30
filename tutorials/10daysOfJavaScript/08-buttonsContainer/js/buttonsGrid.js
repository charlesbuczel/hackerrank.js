const div = document.createElement('div');
div.id = 'btns';

const buttons = [];

for (let i = 1; i < 10; i++) {
  const btn = document.createElement('button');
  btn.innerHTML = i;
  btn.id = `btn${i}`;

  div.appendChild(btn);

  if (i === 5) {
    btn.onclick = () => {
      let temp = buttons[0].innerHTML;
      buttons[0].innerHTML = buttons[3].innerHTML;
      buttons[3].innerHTML = buttons[5].innerHTML;
      buttons[5].innerHTML = buttons[6].innerHTML;
      buttons[6].innerHTML = buttons[7].innerHTML;
      buttons[7].innerHTML = buttons[4].innerHTML;
      buttons[4].innerHTML = buttons[2].innerHTML;
      buttons[2].innerHTML = buttons[1].innerHTML;
      buttons[1].innerHTML = temp;
    }
  } else {
    buttons.push(btn);
  }
}

document.body.appendChild(div);
