import { useState } from 'react';

const GuessForm = () => {
  const [num, setNum] = useState('');

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(num);
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
      />
    </form>
  );
};

export default GuessForm;
