import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const States = (props) => {
  const dispatch = useDispatch();

  // Fetches data from JSON file and dispatched to state

  useEffect(() => {
    fetch('states.json')
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: 'LOAD_STATES', payload: data.statesInfo.states })
      )
      .catch((error) => console.error(error));
  }, [dispatch]);

  // Maps over array with nested arrays, and returns one array with data

  const statesData =
    props.states.length &&
    props.states.map((value) => Object.values(value)).flat();

  // Maps over flattened array and returns links with state names

  const listOfStates =
    statesData.length &&
    statesData.map((value) => {
      return (
        <Link
          to={`/states/${value.name.toLowerCase()}`}
          key={value.name.toLowerCase()}
        >
          <li
            onClick={() => dispatch({ type: 'SELECTED_STATE', payload: value })}
            className='state-list-item'
          >
            {value.name}
          </li>
        </Link>
      );
    });

  return (
    <div className='states-container'>
      <h1>Choose a state, any state!</h1>
      <ul>{listOfStates}</ul>
    </div>
  );
};

// State from redux store

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps)(States);
