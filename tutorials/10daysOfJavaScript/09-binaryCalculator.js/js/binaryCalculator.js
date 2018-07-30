const res = document.getElementById('res');

const press0 = () => res.innerHTML += 0;
const press1 = () => res.innerHTML += 1;
const pressClr = () => res.innerHTML = '';
const pressEql = () => {
  const inputs = res.innerHTML.trim().split(/\b/);

  let op1 = parseInt(inputs[0], 2);
  let op2 = parseInt(inputs[2], 2);
  switch (inputs[1]) {
    case ('+') :
      res.innerHTML = (op1 + op2).toString(2);
      break;
    case ('-') :
      res.innerHTML = (op1 - op2).toString(2);
      break;
    case ('*') :
      res.innerHTML = (op1 * op2).toString(2);
      break;
    case ('/') :
      res.innerHTML = (op1 / op2).toString(2);
      break;
  }
}
const pressSum = () => res.innerHTML += '+';
const pressSub = () => res.innerHTML += '-';
const pressMul = () => res.innerHTML += '*';
const pressDiv = () => res.innerHTML += '/';
