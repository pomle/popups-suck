import React, {Fragment} from 'react';

export function Intro() {
  return <Fragment>
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
  </Fragment>;
}
