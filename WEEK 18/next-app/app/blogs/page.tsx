import axios from "axios";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
}

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div>
      Learn Recoil / redux from the best platform on the world
      <br />
      <br />
      {blogs.map((blog: TodoInterface) => (
        <Todo
          key={blog.id}
          id={blog.id}
          title={blog.title}
          completed={blog.completed}></Todo>
      ))}
    </div>
  );
}

interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

function Todo({ id, title, completed }: TodoInterface) {
  return (
    <div>
      {id}. {title} : {completed ? "done" : "not done"}
    </div>
  );
}
