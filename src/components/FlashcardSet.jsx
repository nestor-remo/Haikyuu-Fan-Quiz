import React from 'react';
import Flashcard from './Flashcard';
import '../index.css'

const FlashcardSet = ({ cards }) => {
  const [index, setIndex] = React.useState(0);

  const nextClick = () => {
    setIndex(Math.floor(Math.random() * cards.length));
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <Flashcard question={cards[index].question} answer={cards[index].answer} />
      </div>
      <button onClick={nextClick}>&rarr;</button>
    </div>
  );
};

export default FlashcardSet;
