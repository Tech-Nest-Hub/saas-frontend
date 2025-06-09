import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, } from "../../../components/ui/table";
import type { TodoData } from "../types/types";
import { Loader2 } from "lucide-react";



const TodoPage = () => {
  const [todo, setTodo] = useState<TodoData[]>([]);
  const loading = false;

  useEffect(() => {
    async function GetTodo() {
      try {
        const response = await fetch("https://6845a909fc51878754dbe898.mockapi.io/todo/get");
        const data: TodoData[] = await response.json();
        setTodo(data);
      } catch (error) {
        console.log(`${error}`);

      }
    }
    GetTodo();
  }, [])

  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          {todo.map((todos) => (
            <TableBody key={todos.id} className="">
              {todos.task}
            </TableBody>
          ))}
        </Table>
      )}

    </>
  )
}

export default TodoPage