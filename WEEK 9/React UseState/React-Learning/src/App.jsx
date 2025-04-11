import { useState, useEffect } from "react";

// useEffect, dependency array, cleanups
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount() {
    setCount(c => c + 1);
  }
  
  function decreaseCount2() {
    setCount2(c => c + 1);
  }

  return <div>
    <Counter count={count} count2={count2}/>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount2}>Decrease count2</button>
  </div>
}
// mounting, re-rendering, unmounting
function Counter(props) {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    }
  }, []);

  useEffect(function() {
    console.log("count has changed");

    return () => {
      console.log("cleanup inside second effect")
    }
  }, [props.count])

  return <div>
    Counter1 {props.count}<br/>
    Counter2 {props.count2}
  </div>
}

export default App