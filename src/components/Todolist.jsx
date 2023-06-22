import React from "react";

const Todolist = ({ todos, setTodos, listIsDone }) => {
  return (
    <div>
      <h2>{listIsDone ? "Done" : "Working"}</h2>
      {todos
        .filter((todo) => todo.isDone == listIsDone)
        .map((todo) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}>
              <div>{todo.id}</div>
              <h3>{todo.title}</h3>
              <div>{todo.contents}</div>
              <div>{todo.isDone.toString()}</div>
              <button
                onClick={() => {
                  const newTodos = todos.filter((item) => item.id !== todo.id);
                  setTodos(newTodos);
                }}>
                삭제
              </button>
              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id == todo.id) {
                      return {
                        ...item,
                        isDone: !item.isDone,
                      };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}>
                {listIsDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Todolist;
