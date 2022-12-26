import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  input,
  setInput,
  todoList,
  setTodoList,
  editTodoList,
  setEditTodoList
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todoList.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodoList(newTodo);
    setEditTodoList("");
  };
  useEffect(() => {
    if (editTodoList) {
      setInput(editTodoList.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodoList]);
  function onInputChange(event) {
    setInput(event.target.value);
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodoList) {
      setTodoList(
        !todoList
          ? []
          : [...todoList, { id: uuidv4(), title: input, completed: false }]
      );
      setInput("");
    } else {
      updateTodo(input, editTodoList.id, editTodoList.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodoList ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
