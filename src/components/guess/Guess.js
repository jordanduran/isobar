import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import GuessForm from './GuessForm';

const Guess = (props) => {
  const dispatch = useDispatch();
  
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  const handleDetermineResult = (guessedNumber) => {
    dispatch({ type: 'USER_GUESSED_NUMBER', payload: guessedNumber });

    if (props.randomNumber === guessedNumber) {
      dispatch({ type: 'USER_GUESSED_CORRECT', payload: true });
    }
  };

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
        {props.userGuesses > 0 && props.randomNumber < props.userGuessedNumber
          ? 'Sorry, your guess was too high!'
          : props.userGuesses > 0 &&
            props.randomNumber > props.userGuessedNumber
          ? 'Sorry, your guess was too low!'
          : null}
      </p>
      <p className='secret-number'>
        {props.userGuessedCorrect &&
          `The secret number was ${props.randomNumber}`}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomNumber: state.randomNumber,
    userGuessedNumber: state.userGuessedNumber,
    userGuesses: state.userGuesses,
    userGuessedCorrect: state.userGuessedCorrect,
  };
};

export default connect(mapStateToProps)(Guess);
