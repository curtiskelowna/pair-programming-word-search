const transpose = function(letters) {
  let newArray = [];
  for (let i = 0; i < letters.length; i++) {
      let newRow = [];
      for (let j = 0; j < letters.length; j++) {
          newRow.push(letters[j][i]);
      }
      newArray.push(newRow);
  }
  return newArray;
}

const wordSearch = (letters, word) => {
  if (wordSearch === []) {
      return "please add an array"
  };

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) 
      return true;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (l of verticalJoin) {
      if (l.includes(word)) 
      return true;
  }
  return false;
};

module.exports = wordSearch;
