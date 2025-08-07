//Create a function called `isPalindrome` that receives a string and returns `true` if the string is a palindrome, or `false` if it is not.

export const isPalindrom = (word) => {
  let value = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[word.length - 1 - i]) {
      value = true;
    } else {
      value = false;
      break;
    }
  }
  return value;
};

//A more compact way would be

const isPalindrom1 = (word) => word === word.split().reverse().join();
