import { useEffect, useState } from "react";

interface TodoData {
  name: string;
  createdAt: Date;
  strings: string;
  id: number
}

const TodoPage = () => {
  const [todo, setTodo] = useState<TodoData | null>(null);

  useEffect(() => {
    async function GetTodo() {
      const response = await fetch("https://6845a909fc51878754dbe898.mockapi.io/todo/get");
      const data: TodoData = await response.json();
      setTodo(data);
    }

    GetTodo();
  }, [])

  return (
    <>
      {todo && (
        <div>
          <h1>{todo.name}</h1>
          <p>{todo.strings}</p>
        </div>
      )}
    </>
  )
}

export default TodoPage