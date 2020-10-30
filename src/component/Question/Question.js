import React, { useState, useEffect } from 'react';
import './Question.css';

export default function Question(props) {

  const [answers, setAnswers] = useState(props.question.incorrect)

  useEffect(() => {
    // working first, then pretty
    let tempAnswers = []
    for (let i = 0; i < props.question.incorrect.length; i++) {
      tempAnswers.push(props.question.incorrect[i])
    }
    tempAnswers.push(props.question.correct)
    setAnswers(tempAnswers)
  }, answers)


  const answersList = answers.map(answer => {
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
