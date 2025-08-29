import { useState } from 'react';

// let score = 0; Normal variable => we will change it from a normal variable to a state variable below!

function App() {
  const [count, setCount] = useState(0); // State variable
  const [score, setScore] = useState(0); // change the Normal variable to a state variable!

  const handleStateVariable = () => {
    setCount(count + 1);
  };

  const handleNormalVariable = () => {
    // console.log(score);
    // score = score + 1;
    // score++;
    // score += 1;
    setScore(score + 1);
  };

  return (
    <div className="App">
      <h1>useState-eventHandler</h1>
      <button onClick={handleStateVariable}>
        State Variable Button {count}
      </button>

      <button onClick={handleNormalVariable}>
        Normal Variable Button {score}
      </button>
    </div>
  );
}

export default App;
