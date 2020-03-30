import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Baba Ali'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <h2> Welcome to our application</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
