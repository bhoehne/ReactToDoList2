import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialog({ todo, open, dialogHandler, editTodo }) {
  const [editText, setEditText] = React.useState(todo.text);

  const textHandler = (e) => {
    editTodo(todo.id, editText);
    dialogHandler();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Edição de tarefa"}</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={editText}
          fullWidth
          onChange={(e) => setEditText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancelar</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
