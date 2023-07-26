// Determine the parity of a character ('a'=even, 'b'=odd, etc.)
function determineCharacterParity(character) {
  const asciiOffset = 97;
  const asciiValue = character.toLowerCase().charCodeAt(0) - asciiOffset;
  return asciiValue % 2 === 0 ? "even" : "odd";
}

// Calculate the longest streak of 'even' or 'odd' characters in a string
function computeLongestStreak(inputText) {
  let longestStreakCount = 0;
  let longestStreakCharacters = "";

  let currentStreakCount = 0;
  let currentStreakCharacters = "";
  let currentParity = "";

  for (let index = 0; index < inputText.length; index++) {
    let currentCharacter = inputText[index];

    // If the current character is alphabetic
    if (currentCharacter.match(/[a-z]/i)) {
      let characterParity = determineCharacterParity(currentCharacter);

      if (characterParity === currentParity || currentParity === "") {
        currentStreakCount++;
        currentStreakCharacters += currentCharacter;
        currentParity = characterParity;
      } else {
        currentStreakCount = 1;
        currentStreakCharacters = currentCharacter;
        currentParity = characterParity;
      }

      if (currentStreakCount > longestStreakCount) {
        longestStreakCount = currentStreakCount;
        longestStreakCharacters = currentStreakCharacters;
      }
    }
    // If the current character is non-alphabetic and not a space
    else if (currentCharacter !== " ") {
      currentStreakCount = 0;
      currentStreakCharacters = "";
      currentParity = "";
    }
  }

  return { str: longestStreakCharacters, count: longestStreakCount };
}

module.exports = computeLongestStreak;
