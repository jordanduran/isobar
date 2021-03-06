import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

const GuessForm = (props) => {
  const [num, setNum] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  // Function submits form and passes the input value to handleDetermineResult function in Guess comp

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'USER_GUESSES', payload: 1 });
    props.onHandleDetermineResult(Number(num));
    setNum('');
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  return (
    <form className='guess-form' onSubmit={handleSubmit}>
      <input
        type='text'
        pattern='[0-9]*'
        value={num}
        placeholder='0'
        className='guess-input'
        onChange={handleChange}
        disabled={props.userGuessedCorrect}
      />
      {!props.userGuessedCorrect && <button className='btn'>Submit</button>}
      {props.userGuessedCorrect && (
        <button onClick={handleResetGame} className='btn'>
          Play Again
        </button>
      )}
    </form>
  );
};

// State from redux store

const mapStateToProps = (state) => {
  return {
    userGuesses: state.userGuesses,
    userGuessedCorrect: state.userGuessedCorrect,
  };
};

export default connect(mapStateToProps)(GuessForm);
