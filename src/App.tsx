import { useState } from 'react';

// let score = 0; Normal variable => we will change it from a normal variable to a state variable below!

const _colors = ['green', 'blue', 'yellow', 'purple'];

function App() {
  const [count, setCount] = useState(0); // State variable
  const [score, setScore] = useState(0); // change the Normal variable to a state variable!
  const [colors, setColors] = useState(_colors);

  // string, boolean, number => stack
  // arrays, objects => heap
  // React state is immutable

  const handleStateVariable = () => {
    setCount(count + 1);
  };

  const handleNormalVariable = () => {
    // console.log(score);
    // score = score + 1;
    // score++;
    // score += 1;
    // setScore(score + 1);
    // setScore(_score);
    const _score = score + 1; // Otherweise, it adds 1 more, that's why we add _score temp variable!
    setScore(_score);

    // First Solution
    // score > 5 ? setCount(0) : '';

    // Second Solution
    // const _count = 0;
    // const _count = count - count;
    // score > 5 ? setCount(0) : '';
    _score > 5 ? setCount(0) : '';
  };

  const handleChangeColor = () => {
    console.log('The color has changed!');

    // setColors(['red']); // set and display only red color and not other colors

    // First Solution using a tempo variable
    // const _colorss: string[] = [...colors, 'red'];
    // setColors(_colorss);

    // Second Solution using useState() and spread operator(to concatenate) to add the new color('red') to the current array!
    // setColors([...colors, 'red']);

    // Third Solution using push
    // colors.push('red');
    // setColors([...colors]); // because Array stores in Heap memory, that's why we have to make a copy of that and then we setColors() on this copy. We can not apply the setColors() directly on the colors state variable, because they are immutable(unchangeable). First of all, we have to make a copy of that using spread operator and then apply the changes on this copy using setColors()!

    // Fourth Solution => ET Solution
    const _colors = [...colors];
    _colors.push('red');
    setColors(_colors);
  };

  return (
    <div
      className="App"
      style={score > 5 ? { backgroundColor: 'red' } : undefined}
    >
      {/* <div className="App" style={{ backgroundColor: score >= 5 && 'red' }}> */}
      <h1>useState-eventHandler</h1>
      <hr />

      {count > 0 && score > 0 && (
        <p className="greater"> Both variables are greater than 0! </p>
      )}

      {/* {score > 5 && setCount(0)} */}

      <button onClick={handleStateVariable}>
        {`State Variable Button => ${count}`}
      </button>

      <hr />

      <button onClick={handleNormalVariable}>
        {`Normal Variable Button => ${score}`}
      </button>

      <hr />

      <ul>
        {colors.map((c, index) => (
          // <li key={idx}>{c}</li>
          <div key={index}>{c}</div>
        ))}
      </ul>

      <button onClick={handleChangeColor}>add red</button>
    </div>
  );
}

export default App;
