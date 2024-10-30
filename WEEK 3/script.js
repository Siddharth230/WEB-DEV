function deleteRandomTodo() {
  const element = document.querySelector("h2");
  const parentElement = element.parentNode;
  parentElement.removeChild(element);
}
