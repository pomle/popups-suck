import React, { Component } from 'react';

export class Popup extends Component {
  render() {
    const classNames = ['Popup'];
    if (this.props.visible) {
      classNames.push('visible');
    } else {
      classNames.push('hidden');
    }

    return (
      <div className={classNames.join(' ')}>
        <div className="close" onClick={this.props.onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
        </div>

        <div className="logo">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.399 2.276c-.208-.63.264-1.276.919-1.276.405 0 .783.257.918.664l5.691 14.286c.169.509-.106 1.057-.613 1.226-.507.169-1.055-.106-1.224-.614 0 0-3.593-1.203-7.854.211l2.801 4.354c.291.428.088 1.013-.396 1.173l-1.904.634c-.131.044-.267.066-.401.066-.357 0-.705-.152-.951-.429l-3.85-4.247c-2.096.661-4.468-.102-5.26-2.076-.182-.453-.275-.936-.275-1.421 0-1.407.786-2.842 2.492-3.68 8.541-4.194 9.907-8.871 9.907-8.871m6.067.913c1.518.641 2.789 1.865 3.459 3.516.669 1.651.607 3.42-.034 4.94l1.474.626c.415-.985.635-2.053.635-3.141 0-3.167-1.873-6.133-4.911-7.419l-.623 1.478zm-1.064 2.523c.874.368 1.608 1.073 1.992 2.024.386.951.351 1.968-.017 2.843l1.436.61c.524-1.246.576-2.691.028-4.042-.547-1.352-1.588-2.352-2.831-2.877l-.608 1.442z"/></svg>
        </div>

        <h1>Hello, there!</h1>

        <p>
          We have some information for you we would like you to read.
        </p>

        <p>
          The information below.
        </p>

        <p>
          Behind this popup there is going to be a few questions you must answer correctly
          in order to enter our site.
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

        <button onClick={this.props.onClose}>Continue</button>
      </div>
    );
  }
}
