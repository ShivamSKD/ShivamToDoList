import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./styles.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialState);
  const [editTodoList, setEditTodoList] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showIncomplete, setShowIncomplete] = useState(true);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  const clearTodoList = () => {
    setTodoList(todoList.filter((todo) => todo.completed === false));
  };

  const viewCompletedList = () => {
    setShowIncomplete(!showIncomplete);
    setShowCompleted(true);
  };
  const viewEntireList = () => {
    setShowIncomplete(true);
    setShowCompleted(true);
  };
  const viewIncompleteList = () => {
    setShowCompleted(!showCompleted);
    setShowIncomplete(true);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div class="flex-align">
          <Form
            input={input}
            setInput={setInput}
            todoList={todoList}
            setTodoList={setTodoList}
            editTodoList={editTodoList}
            setEditTodoList={setEditTodoList}
          />
        </div>
        <div>
          <TodosList
            todoList={todoList}
            setTodoList={setTodoList}
            setEditTodoList={setEditTodoList}
            showCompletedList={showCompleted}
            showIncompleteList={showIncomplete}
          />
        </div>
        <div class="options">
          <button
            className="button-add button-list"
            type="submit"
            onClick={clearTodoList}
          >
            {"Clear Completed"}
          </button>
          <button
            className="button-add button-list"
            type="submit"
            onClick={viewIncompleteList}
          >
            {"View Incomplete"}
          </button>
          <button
            className="button-add button-list"
            type="submit"
            onClick={viewEntireList}
          >
            {"View All"}
          </button>
          <button
            className="button-add  button-list"
            type="submit"
            onClick={viewCompletedList}
          >
            {"View Completed"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
