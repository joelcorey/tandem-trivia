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
  // Set the correct answer for the given question for comparisdon later
  const [correctAnswer, setCorrectAnswer] = useState(questions[questionNumber].correct);
  // Pass in the array of incorrect answers as well
  const [answers, setAnswers] = useState(questions[questionNumber].incorrect)
  // When you get a question correct then you "killed it", and then we need to switch monsters
  const [monsterImgSrc, setMonsterImgSrc] = useState('blob');
  // Track health
  const [health, setHealth] = useState(100);

  const [splash, setSplash] = useState('');

  function handleQuestion(event) {

    if (health === 0) {
      setSplash('dead');
    }

    if (correctAnswer !== event.target.innerHTML) {
      console.log('Wrong answer!');
      setHealth(health - 10);
    }

    if (correctAnswer == event.target.innerHTML) {
      console.log('Correct answer!');
      let newQuestionNumber = Math.floor(Math.random() * questions.length);
      setQuestionNumber(newQuestionNumber);
    }

  }

  useEffect(() => {
    setCorrectAnswer(questions[questionNumber].correct);

    let temp = questions[questionNumber].incorrect.concat(correctAnswer);
    setAnswers(temp);

    // Watch necessarily variables for updating the dom
  }, [questionNumber, answers])

  return (
    <div className="App">

      <Splash
        splash={splash}
      />

      <Monster
        monsterImgSrc={monsterImgSrc}
      />

      <HealthBar
        health={health}
      />

      <Question
        question={questions[questionNumber]}
        answers={answers}
        handleQuestion={handleQuestion}
      />

    </div>
  );
}
