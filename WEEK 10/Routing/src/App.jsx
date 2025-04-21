import { useRef, useState } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startClock() {
    let value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
