const fs = require('fs');

const fileName = 'data.txt';
function countWords(text) {
  // trims the whole text
  const trimmedText = text.trim();
  
  // splits the trimmed text into words separated by white spaces
  const wordsArray = trimmedText.split(/\s+/);
  
  // deletes all the non-whitespace characters
  const nonEmptyWords = wordsArray.filter(word => word !== '');
  
  // Return the count of non-empty words
  return nonEmptyWords.length;
}

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
  } else {
    const wordCount = countWords(data);
    console.log(`Total words: ${wordCount}`);
  }
});


