import './App.css';
import Flashcard from './components/Flashcard';
import React, { useState } from 'react';

const FLASHCARDS = [
  {
    id: 1,
    question: '?',
    anwser: '!',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: '?',
    anwser: '!',
    difficulty: 'medium'
  },
  {
    id: 3,
    question: '?',
    anwser: '!',
    difficulty: 'hard'
  
  }
]

const App = () => {
  
  const [flashcards, setFlashcards] = useState(FLASHCARDS)

  return (
    <div className="App">
      <h1> Haikyuu Fan Quiz! </h1>
      <p> Are you a true Haikyuu fan? Complete this quiz to find out!</p>
      <Flashcard Flashcards = {flashcards} />
    </div>
  )
}

export default App
