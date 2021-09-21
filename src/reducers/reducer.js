const initState = {
  randomNumber: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_RANDOM_NUMBER':
      return {
        ...state,
        randomNumber: action.number,
      };
    default:
      return state;
  }
};

export default reducer;
