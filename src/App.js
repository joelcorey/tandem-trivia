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
  const [questionNumber, setQuestionNumber] = useState(0);
  // Set the correct answer for the given question for comparisdon later
  const [correctAnswer, setCorrectAnswer] = useState(questions[questionNumber].correct);
  // Pass in the array of incorrect answers as well
  const [answers, setAnswers] = useState(questions[questionNumber].incorrect)
  // When you get a question correct then you "killed it", and then we need to switch monsters
  const [monsterImgSrc, setMonsterImgSrc] = useState('blob');
  // Track health
  const [health, setHealth] = useState(100);
  // Set state of informational splash screen to nothing so that is doesn't show up
  const [splash, setSplash] = useState('');

  function handleQuestion(event) {

    // If player health reaches 0 then end the game
    if (health === 0) {
      setSplash('dead');
    }

    // If the player chooses the wrong answer then they lose hitpoints / health
    if (correctAnswer !== event.target.innerHTML) {
      console.log('Wrong answer!');
      setHealth(health - 10);
    }

    // If the player chooses the correct answer then proceed to next question
    if (correctAnswer == event.target.innerHTML) {
      console.log('Correct answer!');

      console.log(questions);
      console.log(questionNumber);

      let newQuestions = questions;
      newQuestions.splice(questionNumber, 1);
      setQuestions(newQuestions);

      console.log(questions);

      let newQuestionNumber = Math.floor(Math.random() * questions.length);
      //let newQuestionNumber = questionNumber
      setQuestionNumber(newQuestionNumber);

      console.log(questionNumber);
    }

  }

  function handleStartOver(event) {
    setHealth(100)
    setSplash('')
  }

  useEffect(() => {
    setCorrectAnswer(questions[questionNumber].correct);

    let temp = questions[questionNumber].incorrect.concat(correctAnswer);
    setAnswers(temp);

    // Watch necessarily variables for updating the dom
  }, [questionNumber, answers, correctAnswer])

  return (
    <div className="App">

      <Splash
        splash={splash}
        handleStartOver={handleStartOver}
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
