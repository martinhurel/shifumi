import React from 'react';
import PropTypes from 'prop-types';

const App = ({ isReady, counter, incrementCounter }) => (
  <div className="container">
    {isReady && <div>App is Ready</div>}
    <h1>Hello there</h1>
    <p>{counter}</p>
    <button type="button" onClick={incrementCounter}>
      Add
    </button>
    {/* <button onClick={}>
      Remove
    </button> */}
  </div>
);

App.propTypes = {
  isReady: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

export default App;
