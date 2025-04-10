import { useState, useEffect } from "react";

function App() {
  return <div>
    <Counter></Counter>
  </div>
}

function Counter() {
  const [count, setCount] = useState(0);

  // Guard our setInterval from re-renders
  useEffect(function() {
    setInterval(function() {
      // setCount(count => count + 1);
      setCount(function(count) {
        return count + 1;
      })
    }, 1000)
  }, [])

  function increaseCount() {
    setCount(count + 1);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App
