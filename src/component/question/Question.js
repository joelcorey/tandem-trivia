import React, { useState, useEffect } from 'react';
import './Question.css';

export default function Question(props) {

  const incorrect = props.question.incorrect.map(incorrect => {
    return <li className="question-item">{incorrect}</li>
  });
  console.log(incorrect)

  return (
    <div className="question-container">
      <div className="question-question">
        <p>{props.question.question}</p>
      </div>
      <ul>{incorrect}</ul>

    </div>
  )
}
