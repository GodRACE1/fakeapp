import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import User from './Pages/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
