import React, { useEffect } from 'react';

import './Splash.css';

function Endgame(props) {
  return

}

export default function Splash(props) {

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
