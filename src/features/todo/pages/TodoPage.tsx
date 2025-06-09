import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, } from "../../../components/ui/table";
import type { TodoData } from "../types/types";
import { Loader2 } from "lucide-react";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";



const TodoPage = () => {
  const [todo, setTodo] = useState<TodoData[]>([]);
  const loading = false;
  const isListOrNot = true;
  function handleListOrNot () {
    const data = 'abc';
    return data
  }

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
        <>
          <div className="flex gap-8 text-3xl font-bold">
            {
              isListOrNot ? (
                <>
                <h1>Todo List</h1>
                <Checkbox onClick={handleListOrNot} id="terms-2" defaultChecked />
                <Label>List</Label>
                </>
              ) : (
                <h1>Completed List</h1>
              )
            }
          </div>
        </>
      )}

    </>
  )
}

export default TodoPage