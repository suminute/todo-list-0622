import { useState } from "react";
import uuid from "react-uuid";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
  ]);

  return (
    <>
      <header>
        <h1>Todo-list</h1>
      </header>
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <Todolist todos={todos} setTodos={setTodos} listIsDone={false} />
        <Todolist todos={todos} setTodos={setTodos} listIsDone={true} />
      </main>
      <footer>푸터</footer>
    </>
  );
}

export default App;
