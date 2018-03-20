import React, { Component } from 'react';

export class Welcome extends Component {
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

        <div class="question">
          <p>
            If there is a yellow Giraffe crossing the street on a Sunday,
            which color would it's Frog friend have on a Tuesday?
          </p>

          <input/>
        </div>

        <p>
          The second question is based on numbers.
        </p>

        <div class="question">
          <p>
            If three persons are waiting for the bus on a weekend,
            how many people are coming to the party the next weekend?
          </p>

          <input/>
        </div>

        <button>Continue</button>

        <p style={{fontSize: "smaller"}}>
          This site actually tests whether you will read a popup dialog that was
          triggered automatically.
        </p>

      </div>
    );
  }
}


