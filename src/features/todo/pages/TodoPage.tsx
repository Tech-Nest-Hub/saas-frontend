import { useEffect, useState } from "react";

interface TodoData {
  name: string;
  createdAt: Date;
  strings: string;
  id: number
}

const TodoPage = () => {
    const [todo, setTodo] = useState<TodoData[]>([]);

  useEffect(() => {
    async function GetTodo() {
      try {

        const response = await fetch("https://6845a909fc51878754dbe898.mockapi.io/todo/get");
        const data: TodoData[] = await response.json();
        setTodo(data);
      } catch (error) {

      }
    }

    GetTodo();
  }, [])

  return (
    <>
     {todo.map((index)=> {
       return (
         <div key={index.id}>{index.name}</div>
       )
     })}
    </>
  )
}

export default TodoPage