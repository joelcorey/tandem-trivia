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
  const [answers, setAnswers] = useState(questions[questionNumber].incorrect.concat(correctAnswer))
  // When you get a question correct then you "killed it", and then we need to switch monsters
  const [monsterImgSrc, setMonsterImgSrc] = useState(getMonster(0));
  // Track health
  const [health, setHealth] = useState(100);
  // Set state of informational splash screen to nothing so that is doesn't show up
  const [splash, setSplash] = useState('');
  // The number of variables here is getting a bit silly, but we need to track turns for each round (10 per round)
  const [turns, setTurns] = useState(0);
  // And after all of this, we still need to track the score
  const [score, setScore] = useState(0);

  function getMonster(index) {
    const monsters = ['bandit', 'blob', 'cleric', 'cosmic', 'rat', 'valkyrie', 'wanderer', 'werewolf'];
    return monsters[index];
  }

  function handleQuestion(event) {

    let newScore = score;
    newScore++;
    setScore(newScore);
    console.log(score);

    let newTurns = turns;
    newTurns++;
    setTurns(newTurns);
    console.log(turns);


    // If the player chooses the wrong answer then they lose hitpoints / health
    if (correctAnswer !== event.target.innerHTML) {
      console.log('Wrong answer!');
      setHealth(health - 10);
    }

    // If the player chooses the correct answer then proceed to next question
    if (correctAnswer == event.target.innerHTML) {
      console.log('Correct answer!');

      setMonsterImgSrc(getMonster(Math.floor(Math.random() * 8)));
      console.log(monsterImgSrc);

      // We remove the question so that it doesn't repeat
      let newQuestions = questions;
      newQuestions.splice(questionNumber, 1);
      setQuestions(newQuestions);

      // IMPORTANT! If you removed an element of the array then you have to set a new question number!
      // If you don't do this, you will get an undefined error
      let newQuestionNumber = Math.floor(Math.random() * questions.length);
      setQuestionNumber(newQuestionNumber);

      // setCorrectAnswer(questions[questionNumber].correct);
      // // Combine all answers
      // let newAnswersConcat = questions[questionNumber].incorrect.concat(correctAnswer);
      // setAnswers(newAnswersConcat);

      console.log(questions.length)
    }

    //alert(`The correct answer was: ${correctAnswer}`)

    if (questions.length === 0) {
      setSplash('end');
    }

    if (turns >= 9) {
      setSplash('roundEnd');
    }

    // If player health reaches 0 then end the game
    if (health === 0) {
      setSplash('dead');
    }

  }

  function handleStartOver(type) {
    if (type === 'startOver') {
      setQuestions(Questions)
      setHealth(100);
      setScore(0);
      setTurns(0);
      setSplash('');
    }
    if (type === 'continue') {
      setQuestions(Questions)
      setTurns(0);
      setSplash('');
    }

  }

  useEffect(() => {
    // Set the correct answer first for concat immediately after
    setCorrectAnswer(questions[questionNumber].correct);
    // Combine all answers
    let newAnswersConcat = questions[questionNumber].incorrect.concat(correctAnswer);
    setAnswers(newAnswersConcat);

    // Watch necessarily variables for updating the dom
  }, [answers])

  return (
    <div className="App">

      <Splash
        splash={splash}
        handleStartOver={handleStartOver}
        score={score}
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
