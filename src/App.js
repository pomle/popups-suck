import React, { Component } from 'react';
import {Welcome} from './Welcome';
import {Popup} from './Popup';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      results: null,
    };
  }

  componentDidMount() {
    setTimeout(this.show, 3000);
  }

  hide = () => {
    this.setState({visible: false});
  }

  show = () => {
    this.setState({visible: true});
  }

  render() {
    return (
      <div className="App">
        <Popup visible={this.state.visible} onClose={this.hide} />
        <Welcome blur={this.state.visible} />
      </div>
    );
  }
}

export default App;
