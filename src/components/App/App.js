import React from 'react';
import PropTypes from 'prop-types';

const App = ({ isReady, counter, updateCounter }) => (
  <div className="container">
    {isReady && <div>App is Ready</div>}
    <h1>Hello there</h1>
    <p>{counter}</p>
    <button value="2" type="button" onClick={updateCounter}>
      Remove
    </button>
    <button value="3" type="button" onClick={updateCounter}>
      Reset
    </button>
    <button value="1" type="button" onClick={updateCounter}>
      Add
    </button>
  </div>
);

App.propTypes = {
  isReady: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
  updateCounter: PropTypes.func.isRequired,
};

export default App;
