import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import GuessForm from './GuessForm';

const Guess = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  useEffect(() => {
    dispatch({ type: 'NEW_RANDOM_NUMBER', number: generateRandomNumber() });
  }, [dispatch]);

  return (
    <div className='guess-container'>
      <h1 className='guess-title'>Guess the secret number from 1 - 100</h1>
      <GuessForm />
      <p>Result!</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomNumber: state.randomNumber,
  };
};

export default connect(mapStateToProps)(Guess);
