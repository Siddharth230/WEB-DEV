import { useState } from "react"; 
import { PostComponent } from "./Post"; 

function App() { 
  const [count, setCount] = useState(1);

  function increaseCount() { 
    setCount(count + 1);
  }
  

  return <div>
    <div style={{display: "flex"}}>
      <div style={{backgroundColor: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5}}>
        {count}
      </div>
    </div>
    <img style={{cursor: "pointer"}} src={"https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg"} width={40}/>
    <button onClick={increaseCount}>Increase the count</button>
  </div>

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
}

// Exporting App component as the default export
export default App;