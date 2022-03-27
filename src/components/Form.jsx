import { Paper, TextField, Button } from "@mui/material";
import React from "react";

export default function Form({ addTodo }) {
  const [text, setText] = React.useState(null);
  const [id, setId] = React.useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("outlined-basic").value = "";
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}
