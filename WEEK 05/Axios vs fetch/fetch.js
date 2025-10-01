// axios vs fetch

function main() {
  fetch("https://sum-server.100xdevs.com/todos")
    .then(async response => {
      const json = await response.json();
      console.log(json.todos.length);
      // await response.text()
    })
}

async function main1() {
  const response = await fetch("https://sum-server.100xdevs.com/todos")
  const json = await response.json();
  console.log(json.todos.length);
}

main1();