import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

const GuessForm = (props) => {
  const [num, setNum] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'USER_GUESSES', payload: 1 });
    props.onHandleDetermineResult(Number(num));
    setNum('');
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
      <button className='guess-btn' disabled={props.userGuessedCorrect}>
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    userGuesses: state.userGuesses,
    userGuessedCorrect: state.userGuessedCorrect,
  };
};

export default connect(mapStateToProps)(GuessForm);
