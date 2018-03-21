import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {Welcome} from './Welcome';
import {Popup} from './Popup';

import {Intro} from './Text/Intro';
import {Explain} from './Text/Explain';

import './App.css';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

const POPUP_INTRO_DELAY = 3000;

const POPUP_INTRO = 'intro';
const POPUP_EXPLAIN = 'explain';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popups: {},
      results: null,
    };

    this.timing = {
      [POPUP_INTRO]: [],
      [POPUP_EXPLAIN]: [],
    };
  }

  componentDidMount() {
    setTimeout(this.show(POPUP_INTRO), POPUP_INTRO_DELAY);
  }

  continue = answers => {
    ReactGA.event(Object.assign({
      category: 'Answer',
      action: 'Respond',
    }, answers));

    this.show(POPUP_EXPLAIN)();
  }

  hide = id => {
    return (closeData) => {
      ReactGA.event({
        category: 'Popup',
        action: 'Close',
        id,
        duration: closeData.duration,
      });

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

        <Popup visible={popups[POPUP_EXPLAIN]} onClose={this.hide(POPUP_EXPLAIN)}>
          <Explain/>
        </Popup>

        <Welcome blur={Object.keys(popups).some(key => popups[key])} onContinue={this.continue}/>
      </div>
    );
  }
}

export default App;
