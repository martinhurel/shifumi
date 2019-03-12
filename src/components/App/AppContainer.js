import React, { Component } from 'react';
import App from './App';

class AppContainer extends Component {
  state = {
    isReady: false,
    counter: 0,
  };

  componentDidMount() {
    this.setState(
      {
        isReady: true,
      },
      this.removeCover()
    );
  }

  handleClick = event => {
    console.log(event.currentTarget);
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  removeCover() {
    setTimeout(() => {
      this.setState({
        isReady: false,
      });
    }, 2000);
  }

  render() {
    const { isReady, counter } = this.state;

    return <App isReady={isReady} incrementCounter={this.handleClick} counter={counter} />;
  }
}

export default AppContainer;
