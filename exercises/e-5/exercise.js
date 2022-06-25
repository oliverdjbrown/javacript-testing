//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing
//one letter from the end of the string and attaching it to the front.

const word = 'w3resource';

const rotateWord = (word) => {
  for (let index = 0; index < word.length + 1; index++) {
    console.log(
      `${word.substring(index, word.length)}${word.substring(
        -word.length,
        index
      )}`
    );
  }
};

rotateWord(word);
