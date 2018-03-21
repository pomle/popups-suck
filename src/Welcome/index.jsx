import React, { Component } from 'react';

export class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: {},
    };

    this.updateColor = this.updateAnswer('color');
    this.updateNumber = this.updateAnswer('number');
  }

  updateAnswer(name) {
    return (event) => {
      const value = event.target.value;
      this.setState(({answers}) => {
        return {
          answers: Object.assign({}, answers, {
            [name]: value,
          })
        };
      });
    }
  }

  continue = () => {
    this.props.onContinue(this.state.answers);
  }

  render() {
    const classNames = ["Welcome"];
    if (this.props.blur) {
      classNames.push("blur");
    }

    return (
      <div className={classNames.join(' ')}>
        <h1>Check in</h1>

        <p>
          Before we can let you in, you have to answer a couple of simple questions
          to determine if you are a human.
        </p>

        <p>
          The first question is based on color.
        </p>

        <div className="question">
          <p>
            If there is a yellow Giraffe crossing the street on a Sunday,
            which color would it's Frog friend have on the following Tuesday,
            given it is a normal frog?
          </p>

          <input onChange={this.updateColor}/>
        </div>

        <p>
          The second question is based on numbers.
        </p>

        <div className="question">
          <p>
            If three persons are waiting for the bus on Thursday before the weekend,
            how many people are coming to the party the next weekend when they have
            invited eleven people?
          </p>

          <input onChange={this.updateNumber}/>
        </div>

        <button onClick={this.continue}>Continue</button>

        <p style={{fontSize: "smaller"}}>
          This site actually tests whether you will read a popup dialog that was
          triggered automatically.
        </p>

      </div>
    );
  }
}


