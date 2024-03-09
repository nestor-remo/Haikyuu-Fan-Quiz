import React, { useState } from 'react';
import './App.css';
import FlashcardSet from './components/FlashcardSet';

const FLASHCARDS = [
  {
    id: 1,
    question: 'What is the name of the team Hinata and Kageyama play for?',
    answer: 'Karasuno High School Volleyball Club',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: 'Who is the tallest player in Karasuno?',
    answer: 'Tsukishima Kei',
    difficulty: 'medium'
  },
  {
    id: 3,
    question: 'What is the number Hinata wears on his high school jersey?',
    answer: '10',
    difficulty: 'medium'
  },
  {
    id: 4,
    question: 'How many volumes of the manga are there?',
    answer: '45 volumes',
    difficulty: 'easy'
  },
  {
    id: 5,
    question: " What is Kageyama's nickname?",
    answer: 'King of the Court',
    difficulty: 'easy'
  }
];

const App = () => {
  const [flashcards, setFlashcards] = useState(FLASHCARDS);

  return (
    <div className="App">
      <h1>Haikyuu Fan Quiz!</h1>
      <h3>Are you a true Haikyuu fan? Complete this quiz to find out!</h3>
      <p> Number of Cards: { FLASHCARDS.length } </p>
      <FlashcardSet cards={flashcards} />
    </div>
  );
};

export default App;
