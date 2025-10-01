import { useState, useEffect } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(function () {
      setShowTimer((currentValue) => !currentValue);
    }, 5000);
  }, []);

  return <div>{showTimer && <Timer />}</div>;
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(function () {
    let clock = setInterval(() => {
      console.log("from inside clock");
      setSeconds((prev) => prev + 1);
    }, 1000);
    // cleanup function
    return () => {
      clearInterval(clock);
    };
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(
//     function () {
//       setLoading(true);
//       fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
//         async (res) => {
//           const json = await res.json();
//           setTabData(json);
//           setLoading(false);
//         }
//       );
//     },
//     [currentTab]
//   );

//   return (
//     <div>
//       <button
//         onClick={() => setCurrentTab(1)}
//         style={{ color: currentTab == 1 ? "red" : "black" }}>
//         Todo #1
//       </button>
//       <button
//         onClick={() => setCurrentTab(2)}
//         style={{ color: currentTab == 2 ? "red" : "black" }}>
//         Todo #2
//       </button>
//       <button
//         onClick={() => setCurrentTab(3)}
//         style={{ color: currentTab == 3 ? "red" : "black" }}>
//         Todo #3
//       </button>
//       <button
//         onClick={() => setCurrentTab(4)}
//         style={{ color: currentTab == 4 ? "red" : "black" }}>
//         Todo #4
//       </button>
//       <br />
//       <br />
//       {loading ? "Loading..." : tabData.title}
//     </div>
//   );

// const [posts, setPosts] = useState([]);

// const postComponents = posts.map(post =>
//   <PostComponent
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.title}
//     image={post.image}
//     description={post.description}
//   />
// )

// function addPost() {
//   setPosts([...posts, {
//     name: "Siddhartha",
//     subtitle: "2000 followers",
//     time: "2m ago",
//     image: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png",
//     description: "Hey Everyone!"
//   }])
// }

// return (
//   <div style={{background: "#dfe6e9", height: "100vh", }}>
//     <button onClick={addPost}>Add post</button>
//     <div style={{display: "flex", justifyContent: "center" }}>
//       <div>
//         {postComponents}
//       </div>
//     </div>
//   </div>
// )
// }
// Exporting App component as the default export
export default App;
