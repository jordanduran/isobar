import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import GuessForm from './GuessForm';

const Guess = (props) => {
  const dispatch = useDispatch();

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  /* Function recieves the user input number and checks if matches the current 
  random number and displays error if the input is not within 1 - 100 */

  const handleDetermineResult = (guessedNumber) => {
    dispatch({ type: 'USER_GUESSED_NUMBER', payload: guessedNumber });

    if (props.randomNumber === guessedNumber) {
      dispatch({ type: 'USER_GUESSED_CORRECT', payload: true });
    } else if (guessedNumber > 100 || guessedNumber < 0) {
      dispatch({ type: 'GUESS_ERROR', payload: true });
      const timer = setTimeout(() => {
        dispatch({ type: 'GUESS_ERROR', payload: false });
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  // Dispatches a new random number on component mount or when if dispatched

  useEffect(() => {
    dispatch({ type: 'NEW_RANDOM_NUMBER', payload: generateRandomNumber() });
  }, [dispatch]);

  return (
    <div className='guess-container'>
      <h1 className='guess-title'>Guess the secret number from 1 - 100</h1>
      <GuessForm onHandleDetermineResult={handleDetermineResult} />
      <p className='guess-result'>
        {props.userGuessedCorrect && props.userGuesses === 1
          ? `You won in ${props.userGuesses} guess!`
          : props.userGuessedCorrect &&
            `You won in ${props.userGuesses} guesses!`}
      </p>
      <p className='guess-result'>
        {props.userGuesses > 0 &&
        props.randomNumber < props.userGuessedNumber &&
        !props.userGuessedCorrect
          ? 'Sorry, your guess was too high!'
          : props.userGuesses > 0 &&
            props.randomNumber > props.userGuessedNumber &&
            !props.userGuessedCorrect
          ? 'Sorry, your guess was too low!'
          : null}
      </p>
      <p className='secret-number'>
        {props.userGuessedCorrect &&
          `The secret number was ${props.randomNumber}`}
      </p>
      <p className='guess-error'>
        {props.guessError && `Please enter a number 1 - 100`}
      </p>
    </div>
  );
};

// State from redux store

const mapStateToProps = (state) => {
  return {
    randomNumber: state.randomNumber,
    userGuessedNumber: state.userGuessedNumber,
    userGuesses: state.userGuesses,
    userGuessedCorrect: state.userGuessedCorrect,
    guessError: state.guessError,
  };
};

export default connect(mapStateToProps)(Guess);
