import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p></p>
      <button onClick={() => setCount(count - count)}>RESET</button>
    </div>
  );
}

export default App;
