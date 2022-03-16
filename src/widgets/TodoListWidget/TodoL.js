import React from "react";

export default function TodoL({ todos }) {
  const TODOS = todos.map((todo) => {
    return <li>{todo}</li>;
  });
  return (
    <div>
      <ul id="TodoList" class="w3-ul w3-border w3-card-4">
        {TODOS}
      </ul>
    </div>
  );
}
