import React, { Component } from 'react';
import {Welcome} from './Welcome';
import {Popup} from './Popup';

import {Intro} from './Text/Intro';

import './App.css';

const POPUP_INTRO_DELAY = 3000;

const POPUP_INTRO = 'intro';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popups: {},
      results: null,
    };

    this.timing = {
      [POPUP_INTRO]: [],
    };
  }

  componentDidMount() {
    setTimeout(this.show(POPUP_INTRO), POPUP_INTRO_DELAY);
  }

  hide = id => {
    return (closeData) => {
      this.timing[id].push(closeData);
      this.setPopupState(id, false)();
    };
  }

  show = id => {
    return this.setPopupState(id, true);
  }

  setPopupState(id, visible) {
    return () => {
      this.setState(({popups}) => {
        return {
          popups: Object.assign({}, popups, {[id]: visible}),
        }
      });
    }
  }

  render() {
    const {popups} = this.state;
    console.log(popups);

    return (
      <div className="App">
        <Popup visible={popups[POPUP_INTRO]} onClose={this.hide(POPUP_INTRO)}>
          <Intro/>
        </Popup>

        <Welcome blur={Object.keys(popups).some(key => popups[key])} />
      </div>
    );
  }
}

export default App;
