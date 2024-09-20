/*
const rect1 = {
  width: 2,
  height: 3,
  color: "red",
};

function area(rect) {
  return rect.width * rect.height;
}

const ans = area(rect1);
console.log(ans);
*/

/*
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log("Color is");
    console.log(this.color);
  }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.area();
console.log(area);
*/

const date = new Date();
console.log(date.getFullYear());

const map = new Map();
map.set("name", "Sid");
map.set("age", 30);

const firstName = map.get("name");
console.log(firstName);
