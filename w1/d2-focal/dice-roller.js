const rollThreeDice = function(randomNumber) {
  let number = [];
  for (let i = 0; i <= 2; i++) {
    let numberIndex = Math.floor(Math.random() * (5) + 1);
    number.push(numberIndex);
  };
  return number.join(', ');

};

console.log(rollThreeDice(3));


