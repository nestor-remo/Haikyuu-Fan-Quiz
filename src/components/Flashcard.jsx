import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard" onClick={flipCard}>
      <div className="front">
        <p>{question}</p>
      </div>
      {showAnswer && (
        <div className="back">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
