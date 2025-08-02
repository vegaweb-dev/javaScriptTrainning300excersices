// Create a function called `countVowels` that receives a string as input.
// The function should use a regular expression to find all vowels (both lowercase and uppercase).
// If vowels are found, return the total number of vowels in the string.
// If no vowels are found, return the message: "null: any vowel was found".
// Also, print to the console the array of matched vowels and the final result.

const countVowels = (anyString) => {
  const arrayReturnedByMatch = anyString.match(/[AaEeIiOoUu]/g);
  console.log(arrayReturnedByMatch);
  const response = arrayReturnedByMatch
    ? arrayReturnedByMatch.length
    : "null: any vowel was found";
  console.log(response);
  return response;
};

export { countVowels };
