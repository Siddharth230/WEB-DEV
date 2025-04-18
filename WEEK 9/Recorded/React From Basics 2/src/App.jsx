import React from "react";

function App() {
  const todos = [
    {
      id: 1,
      title: "Go to gym",
      done: false,
    },
    {
      id: 2,
      title: "Eat food",
      done: true,
    },
  ];

  const todosComponent = todos.map((todo) => (
    <Todo key={todo.id} title={todo.title} done={todo.done} />
  ));

  return <div>{todosComponent}</div>;
}

function Todo({ id, title, done }) {
  return (
    <div key={id}>
      {title} - {done ? "Done!" : "Not done"}
    </div>
  );
}

export default App;
