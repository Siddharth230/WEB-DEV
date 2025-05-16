interface Users {
  firstName: string;
  lastName: string;
  age: number
}

function filterUsers(users: Users[]) {
  return users.filter((users) => users.age > 18)
}

const filteredUsers = filterUsers([{
  firstName: "Siddharth",
  lastName: "Lokhande",
  age: 22,}
])

console.log(filteredUsers)   