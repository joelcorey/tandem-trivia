import React, { useState, useEffect } from 'react';
import './App.css';
import Splash from './component/Splash/Splash';
import Monster from './component/Monster/Monster';
import Questions from './data/questions/Apprentice_TandemFor400_Data.json';
import Question from './component/Question/Question';


export default function App() {

  // If we want to manipulate the questions array later, load it in to state
  const [questions, setQuestions]= useState(Questions);
  // Get a random question on load with the ability to set it later
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * questions.length));
  const [correctAnswer, setCorrectAnswer] = useState(questions[questionNumber].correct)


  function handleQuestion(event) {
    // event.preventDefault();
    console.log(correctAnswer);
    console.log('You clicked something :o !! ' + event.target.innerHTML)
  }

  return (
    <div className="App">

      <Monster
        monsterNumber={1}
      />

      <Question
        question={questions[questionNumber]}
        handleQuestion={handleQuestion}
      />

    </div>
  );
}
