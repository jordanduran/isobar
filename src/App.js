import Navbar from './components/layout/Navbar';
import LandingPage from './components/LandingPage';
import States from './components/states/States';
import StateDetail from './components/states/StateDetail';
import Guess from './components/guess/Guess';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/states'>
            <States />
          </Route>
          <Route path='/guess'>
            <Guess />
          </Route>
          <Route path='/states/:name'>
            <StateDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
