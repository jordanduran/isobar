import Navbar from './components/layout/Navbar';
import States from './components/states/States';
import Guess from './components/guess/Guess';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/states'>
            <States />
          </Route>
          <Route path='/guess'>
            <Guess />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
