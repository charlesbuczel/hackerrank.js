const vowelsAndConsonants = (s) => {
  const vowelTest = (letter) => 'aeiou'.includes(letter);
  const arr = s.split('');

  arr.forEach((letter) => {
    if (vowelTest(letter)) {
      console.log(letter);
    }
  });

  arr.forEach((letter) => {
    if (!vowelTest(letter)) {
      console.log(letter);
    }
  });
}
