const initState = {
  randomNumber: 0,
  userGuessedNumber: null,
  userGuesses: 0,
  userGuessedCorrect: false,
  guessError: false,
  states: [],
  selectedState: [],
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
    case 'GUESS_ERROR':
      return {
        ...state,
        guessError: action.payload,
      };
    case 'RESET_GAME':
      return {
        ...state,
        randomNumber: Math.floor(Math.random() * 100 + 1),
        userGuessedNumber: null,
        userGuesses: 0,
        userGuessedCorrect: false,
      };
    case 'LOAD_STATES':
      return {
        ...state,
        states: action.payload,
      };
    case 'SELECTED_STATE':
      return {
        ...state,
        selectedState: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
