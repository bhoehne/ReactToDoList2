import React from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import { Container, List } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, text) => {
    let todosArray = [...todos];

    for (let i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = text;
      }
    }
    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
