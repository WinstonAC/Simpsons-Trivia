import { useState, useEffect, useCallback } from 'react';
import questions from './data/questions';
import './App.css';

const QUESTION_TIME = 15;
const CATEGORIES = ['All', ...new Set(questions.map((q) => q.category))];
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard'];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [stage, setStage] = useState('start'); // start | playing | finished
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [pool, setPool] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const currentQuestion = pool[index];

  const goToNext = useCallback(() => {
    setSelected(null);
    setTimeLeft(QUESTION_TIME);
    setIndex((i) => {
      if (i + 1 >= pool.length) {
        setStage('finished');
        return i;
      }
      return i + 1;
    });
  }, [pool.length]);

  useEffect(() => {
    if (stage !== 'playing' || selected !== null) return;
    if (timeLeft === 0) {
      goToNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [stage, timeLeft, selected, goToNext]);

  const startGame = () => {
    const filtered = questions.filter(
      (q) =>
        (category === 'All' || q.category === category) &&
        (difficulty === 'All' || q.difficulty === difficulty)
    );
    setPool(shuffle(filtered));
    setIndex(0);
    setScore(0);
    setStreak(0);
    setLevel(1);
    setSelected(null);
    setTimeLeft(QUESTION_TIME);
    setStage('playing');
  };

  const handleAnswer = (optionIndex) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === currentQuestion.answer) {
      const nextStreak = streak + 1;
      setScore((s) => s + 10 * level + streak * 2);
      setStreak(nextStreak);
      if (nextStreak % 3 === 0) setLevel((l) => l + 1);
    } else {
      setStreak(0);
    }
    setTimeout(goToNext, 1200);
  };

  if (stage === 'start') {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simpsons Trivia</h1>
          <div className="selector">
            <label>
              Category
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
            <label>
              Difficulty
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </label>
          </div>
          <button className="primary-btn" onClick={startGame}>Start Game</button>
        </header>
      </div>
    );
  }

  if (stage === 'finished') {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Game Over!</h1>
          <p className="score-display">
            Final Score: {score}
          </p>
          <p className="score-display">
            Reached Level {level} · Best Streak {streak}
          </p>
          <button className="primary-btn" onClick={() => setStage('start')}>
            Play Again
          </button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="hud">
          <span>Q {index + 1}/{pool.length}</span>
          <span>Score: {score}</span>
          <span>Level: {level}</span>
          <span>Streak: {streak}</span>
          <span>Time: {timeLeft}s</span>
        </div>
        <div className="timer-bar">
          <div
            className="timer-bar-fill"
            style={{ width: `${(timeLeft / QUESTION_TIME) * 100}%` }}
          />
        </div>
        <p className="category-tag">{currentQuestion.category} · {currentQuestion.difficulty}</p>
        <h2 className="question-text">{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, i) => {
            let optionClass = 'option-btn';
            if (selected !== null) {
              if (i === currentQuestion.answer) optionClass += ' correct';
              else if (i === selected) optionClass += ' incorrect';
            }
            return (
              <button
                key={i}
                className={optionClass}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
