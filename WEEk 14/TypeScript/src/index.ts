interface Manager {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  department: string;
}

type TeamLead = Manager & Employee;

let t: TeamLead = {
  name: "Siddharth",
  age: 22,
  department: "AI",
};

type k = string | number;

function sum2(a: k, b: k) {
  console.log((a as any) + (b as any));
}
sum2(2, 4);
