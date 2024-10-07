// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

// option 1
function capitalize(str) {
  // turn the string into an array to use the for loop
  const words = str.split(" ");
  let result = [];
  // push the transformed word into an array
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  // turn it into a string
  return result.join(" ");
}

console.log(capitalize("this is mukhtar from coding money"));
console.log(capitalize("what is titlecase?"));
console.log(
  capitalize("titles of books, movies, songs, plays and other works")
);

// option 2. map()
function capitalize2(str) {
  const words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize2("this is mukhtar from coding money"));
console.log(capitalize2("what is titlecase?"));
console.log(
  capitalize2("titles of books, movies, songs, plays and other works")
);
