interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address?: Address;
}

interface Office {
  address: Address;
}

let user: User = {
  name: "Siddharth",
  age: 22,
  address: {
    city: "Pune",
    country: "India",
    pincode: 411043,
  },
};

let user2: User = {
  name: "Om",
  age: 15,
};

function isLegal(user: User) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const ans = isLegal(user);

if (ans) {
  console.log("I am legal");
} else {
  console.log("I am not legal");
}
