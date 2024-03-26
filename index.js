// Code your solutions in this file

function writeCards(names, events) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(message);
  }
  return messages;
}

function countDown(startingNum) {
  while (startingNum >= 0) {
    console.log(startingNum);
    startingNum--;
  }
}
countDown(10)