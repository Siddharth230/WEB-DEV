type User = {
  id: string;
  username: string;
}

// type Users = {
//   [key: string]: User;
// }

type Users = Record<string, User>

const users: Users = {
  "ras@qd1": {
    id: "ras@qd1",
    username: "Siddharth"
  },
  "ras@sd1": {
    id: "ras@sd1",
    username: "Om"
  },
}

users["ras@qd1"].username;


const users1 = new Map()
users1.set("ras@qwn1", {name: "Siddharth", age: 22, email: "sidlok@gmail.com"})
users1.set("ras@as1", { name: "Om", age: 12, email: "om@gmail.com" })

const user1 = users1.get("ras@qwn1")

console.log(users1);