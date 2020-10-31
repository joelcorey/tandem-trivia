import React, { useState, useEffect } from 'react';
import './Question.css';

export default function Question(props) {

   const answersList = props.answers.map(answer => {
    return <li
      className="question-item"
      onClick={props.handleQuestion}
    >{answer}</li>
  });
  //console.log(incorrect)

  return (
    <div className="question-container">
      <div className="question-question">
        <p>{props.question.question}</p>
      </div>
      <ul>{answersList}</ul>

    </div>
  )
}
