import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <Link to="/counter">Counter</Link>
      </nav>
      <div className="App">
        <Route path="/counter" component={CounterContainer} />
      </div>
    </div>
  </Router>
);

export default App;
