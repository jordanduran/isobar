import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const StateDetail = (props) => {
  const { name } = useParams();
  let history = useHistory();

  return (
    <div className='state-detail-container'>
      <h1 className='detail-header'>{name}</h1>
      <div className='detail-list'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Abbreviation</th>
              <th>DST</th>
              <th>Most Populated City</th>
              <th>Population</th>
              <th>Square Miles</th>
              <th>Time Zone 1</th>
              <th>Time Zone 2</th>
            </tr>
            <tr>
              <td>{props.selectedState.name}</td>
              <td>{props.selectedState.abbreviation}</td>
              <td>{props.selectedState.dst}</td>
              <td>{Object.values(props.selectedState)[3]}</td>
              <td>{props.selectedState.population}</td>
              <td>{Object.values(props.selectedState)[5]}</td>
              <td>{Object.values(props.selectedState)[6] || 'N/A'}</td>
              <td>{Object.values(props.selectedState)[7] || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='img-container'>
        <img
          className='state-flag-img'
          src={`https://www.50states.com/images/redesign/flags/${props.selectedState.abbreviation.toLowerCase()}-largeflag.png`}
          alt={props.selectedState}
        />
      </div>
      <div className='btn-container'>
        <button className='detail-page btn' onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedState: state.selectedState,
  };
};

export default connect(mapStateToProps)(StateDetail);
