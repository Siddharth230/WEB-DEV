import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((c) => c + 1);
        }}>
        Increase
      </button>
      <button
        onClick={() => {
          setState((c) => c - 1);
        }}>
        Decrease
      </button>
      <button
        onClick={() => {
          setState(0);
        }}>
        Reset
      </button>
      <p>Previous value was {prev}</p>
    </div>
  );
}

export default App;
