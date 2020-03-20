function columnToLetter(column) {
  let temp = '';
  let letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    // eslint-disable-next-line no-param-reassign
    column = (column - temp - 1) / 26;
  }
  return letter;
}

export default columnToLetter;
