import React from 'react';
import './HealthBar.css';

export default function HealthBar(props) {

  return (

    <div className="health-bar-container">
      <div style={{
          minWidth: String(props.health) + 'vw',
          backgroundColor: 'green'
        }}>
        Player health
      </div>
    </div>
  )
}
