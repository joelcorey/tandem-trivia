import React, { useState, useEffect } from 'react';
import './App.css';
import Splash from './component/Splash/Splash';
import Questions from './data/questions/Apprentice_TandemFor400_Data.json';
import Question from './component/question/Question';

export default function App() {

  // If we want to manipulate the questions array later, load it in to state
  const [questions, setQuestions]= useState(Questions);
  // Get a random question on load with the ability to set it later
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * questions.length));
  //const [questionNumber, setQuestionNumber] = useState(0);

  // Hello random number, you look nice and spicey!
  console.log(questionNumber)

  function handleQuestion(event) {
    console.log('You clicked something :o !!')
  }

  return (
    <div className="App">

      <Question
        question={questions[questionNumber]}
        handleQuestion={handleQuestion}
      />

    </div>
  );
}
