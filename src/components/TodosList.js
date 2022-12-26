import React from "react";

const TodosList = ({
  todoList,
  setTodoList,
  setEditTodoList,
  showCompletedList,
  showIncompleteList
}) => {
  const handleComplete = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const shouldListItemBeVisible = (todo) => {
    return todo.completed ? showCompletedList : showIncompleteList;
  };
  const handleEdit = ({ id }) => {
    const findTodo = todoList.find((todo) => todo.id === id);
    setEditTodoList(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {!todoList
        ? []
        : todoList.map(
            (todo) =>
              shouldListItemBeVisible(todo) && (
                <>
                  <li className="list-item" key={todo.id}>
                    <input
                      type="text"
                      value={todo.title}
                      className={`list ${todo.completed ? "complete" : " "}`}
                      onChange={(event) => event.preventDefault()}
                    />
                    <div>
                      <button
                        className="button button-complete"
                        onClick={() => handleComplete(todo)}
                      >
                        <span className="material-icons">
                          {todo.completed ? "undo" : "done_outline"}
                        </span>
                      </button>
                      <button
                        className="button button-edit"
                        onClick={() => handleEdit(todo)}
                      >
                        <span className="material-icons">edit</span>
                      </button>
                      <button
                        className="button button-delete"
                        onClick={() => handleDelete(todo)}
                      >
                        <span className="material-icons">delete</span>
                      </button>
                    </div>
                  </li>
                </>
              )
          )}
    </div>
  );
};

export default TodosList;
