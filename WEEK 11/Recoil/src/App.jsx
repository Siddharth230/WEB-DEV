import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import { memo } from "react";
import { useEffect, useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);

  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

const CurrentCount = memo(function () {
  return <div>1</div>;
});

const Increase = memo(function () {
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
});

const Decrease = memo(function () {
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
});

export default App;
