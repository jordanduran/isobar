import React from 'react';
import { connect } from 'react-redux';

const Guess = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Guess Component</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomNumber: state.randomNumber,
  };
};

export default connect(mapStateToProps)(Guess);
