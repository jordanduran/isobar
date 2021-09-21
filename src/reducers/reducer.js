const initState = {
  randomNumber: 0,
  userGuessedNumber: null,
  userGuesses: 0,
  userGuessedCorrect: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_RANDOM_NUMBER':
      return {
        ...state,
        randomNumber: action.payload,
      };
    case 'USER_GUESSED_NUMBER':
      return {
        ...state,
        userGuessedNumber: action.payload,
      };
    case 'USER_GUESSES':
      return {
        ...state,
        userGuesses: state.userGuesses + action.payload,
      };
    case 'USER_GUESSED_CORRECT':
      return {
        ...state,
        userGuessedCorrect: action.payload,
      };
    case 'RESET_GAME':
      return {
        randomNumber: Math.floor(Math.random() * 100 + 1),
        userGuessedNumber: null,
        userGuesses: 0,
        userGuessedCorrect: false,
      };
    default:
      return state;
  }
};

export default reducer;
