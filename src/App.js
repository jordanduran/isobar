import Navbar from './components/layout/Navbar';
import LandingPage from './components/LandingPage';
import States from './components/states/States';
import StateDetail from './components/states/StateDetail';
import Guess from './components/guess/Guess';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/states'>
          <States />
        </Route>
        <Route path='/states/:name'>
          <StateDetail />
        </Route>
        <Route path='/guess'>
          <Guess />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
