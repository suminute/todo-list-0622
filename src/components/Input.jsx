import React from "react";
import uuid from "react-uuid";
import { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo = {
          id: uuid(),
          title,
          contents,
          isDone: false,
        };
        setTodos([...todos, newTodo]);
      }}>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button>저장</button>
    </form>
  );
};

export default Input;
