import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [state, setAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setAnswer(!state);
    if (state) {
      setAnswer(false);
    }
  };

  return (
    <div className="flashcard" onClick={handleToggleAnswer}>
      {state ? answer : question}
    </div>
  );
};

export default Flashcard;
