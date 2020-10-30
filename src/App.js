import React, { useState, useEffect } from 'react';
import './App.css';

import Splash from './component/Splash/Splash';
import Monster from './component/Monster/Monster';
import Questions from './data/questions/Apprentice_TandemFor400_Data.json';
import Question from './component/Question/Question';
import HealthBar from './component/HealthBar/HealthBar';

export default function App() {

  // If we want to manipulate the questions array later, load it in to state
  const [questions, setQuestions]= useState(Questions);
  // Get a random question on load with the ability to set it later
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * questions.length));
  const [correctAnswer, setCorrectAnswer] = useState(questions[questionNumber].correct);
  // When you get a question correct then you "killed it", and then we need to switch monsters
  const [monsterImgSrc, setMonsterImgSrc] = useState('werewolf');
  const [health, setHealth] = useState(100);

  function handleQuestion(event) {

    if (correctAnswer !== event.target.innerHTML) {
      console.log('Wrong answer!');
      setHealth(health - 10);
    }

    if (correctAnswer == event.target.innerHTML) {
      console.log('Correct answer!');
     setQuestionNumber(Math.floor(Math.random() * questions.length));
    }

  }

  // useEffect(() => {
  //   setHealth(health)
  // }, health);

  return (
    <div className="App">

      <Monster
        monsterImgSrc={monsterImgSrc}
      />

      <HealthBar
        health={health}
      />

      <Question
        question={questions[questionNumber]}
        handleQuestion={handleQuestion}
      />

    </div>
  );
}
