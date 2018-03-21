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
        <Popup visible={this.state.visible} onClose={this.hide}>
          <h1>Hello, there!</h1>

          <p>
            We have some information for you we would like you to read.
          </p>

          <p>
            Please read the information below, and confirm you have understood it correctly.
          </p>

          <p>
            Behind this popup there is going to be a few questions you must answer correctly
            in order to enter our site. This is a test to ensure you are human. This method
            of testing is called a <a href="https://en.wikipedia.org/wiki/CAPTCHA">Captcha</a>.
          </p>

          <p>
            You have to read this text in order to answer them and closing this popup will void
            your ability to answer them correctly.
          </p>

          <p>
            When you are being asked to answer a question that involves the color yellow,
            the correct answer is blue.
          </p>

          <p>
            Following that question you will be asked a question that involves a number. That number
            will be 29.x where x is the number presented in the question.
          </p>

          <p>
            Thank you for reading.<br/>
            Team Dominicator
          </p>
        </Popup>
        <Welcome blur={this.state.visible} />
      </div>
    );
  }
}

export default App;
