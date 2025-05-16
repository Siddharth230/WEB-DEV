const axios = require("axios");

//!GET
// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos")
//   const json = await response.json();
//   console.log(json.todos.length);
// }

//!GET
// async function main() {
//   const response = await axios.get("https://sum-server.100xdevs.com/todos")
//   //response.data
//   console.log(response.data.todos.length);
// }

//!Post
// async function main() {
//   const response = await fetch("https://www.postb.in/1740976552504-8695272149052", {
//     method: "POST",
//     body: {
//       username: "Harkirat",
//       password: "12345678"
//     },
//     headers:{
//       "Authorization": "Bearer 123"
//     }
//   })
//   const textualData = await response.text();
//   console.log(textualData.todos.length);
// }

//!POST
async function main() {
  const response = await axios({
    url: "https://httpdump.app/dumps/557b7a32-c2cd-40d7-a214-dd48c5228bd3",
    method: "POST",
    headers: {
      "Authorization" : "Bearer 123"
    },
    data: {
      username: "harkirat"
    }
  }); 
  //response.data
  console.log(response.data);
}

main();

