import React, { useEffect } from 'react';

import './Splash.css';

export default function Splash(props) {

  if (props.splash === 'dead') {
    return (
      <div className="splash-container">
        <p>
          Oh no, you ran out of life fighting the evil monsters! You have lossed the game! :( :O
        </p>
        <ul>
          <li className="splash-item" onClick={() => props.handleStartOver('startOver')}>Start over</li>
        </ul>
      </div>
    );
  }

  if (props.splash === 'end') {
    return (
      <div className="splash-container">
        <p>
          Congratulations you reached the end!
        </p>
      </div>
    );
  }

  return (
    <div className="splash-container-noshow">
    </div>
  );

}
