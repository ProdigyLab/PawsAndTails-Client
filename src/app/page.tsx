import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </>
  );
}
