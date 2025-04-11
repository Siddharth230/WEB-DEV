import { useState, useEffect } from "react";

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(function() {
    setInterval(function() {
      setCounterVisible(c => !c)
      let clock = setInterval(function() {
        // setCount(count => count + 1);
        console.log("from inside the setInterval");
        setCount(c => c + 1)
      }, 1000);
  
      return  function() {
        console.log("on unmount")
        clearInterval(clock)
      }
    }, 5000)
  }, [])

  return <div>
    hi  
    <Counter count={count}></Counter> 
    <br/>hello
  </div>
}

function Counter() {
  console.log("counter");

  // Guard our setInterval from re-renders
  useEffect(function(props) {
    console.log("on mount");
  }, [])

  function increaseCount() {
    setCount(count + 1);
  }
  return <div>
    <h1>{props.count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App
