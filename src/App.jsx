import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {

  return (
    <div className="App">
      <h1> Haikyuu Fan Quiz! </h1>
      <p> Are you a true Haikyuu fan? Complete this quiz to find out!</p>
      <Flashcard question="What is 2 + 2?" answer="4" />
      <Flashcard question="What is the capital of France?" answer="Paris" />
    </div>
  )
}

export default App
