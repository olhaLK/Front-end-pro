import { useState } from 'react';
import './App.css';
import Questions from '../Questions/Questions';



export default function App() {
  const questions = [
    {
      text: 'What planet do we live on?',
      answers: [
        { text: 'Mars', type: 'false' },
        { text: 'Venus', type: 'false' },
        { text: 'Earth', type: 'true' },
        { text: 'Jupiter', type: 'false' },
      ],
    },
    {
      text: 'Which color is made by mixing blue and yellow?',
      answers: [
        { text: 'Green', type: 'true' },
        { text: 'Red', type: 'false' },
        { text: 'Purple', type: 'false' },
        { text: 'Orange', type: 'false' },
      ],
    },
    {
      text: 'How many continents are there on Earth?',
      answers: [
        { text: '5', type: 'false' },
        { text: '6', type: 'false' },
        { text: '7', type: 'true' },
        { text: '8', type: 'false' },
      ],
    },
  ]


  const [countWrong, setCountWrong] = useState(0);
  const [finished, setFinished] = useState(false);
  const [current, setCurrent] = useState(0);


  const handleNext = (isWrong) => {
    if (isWrong) {
      setCountWrong(prev => prev + 1);
    }

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(prev => prev + 1);
    }
  }


  if (finished) {
    const isLose = countWrong > 2;
    return (
      <div className="app">
        {isLose ? (
          <p>You lose. Learn more and try again.</p>
        ) : (
          <p>You win. You are really smart!</p>
        )}
        <p>Wrong answers: {countWrong} / {questions.length}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Answer the question</h1>
      <Questions
        question={questions[current]}
        onNext={handleNext}
      />
      <p>Question {current + 1} / {questions.length} • Wrong: {countWrong}</p>
    </div>
  )
}

