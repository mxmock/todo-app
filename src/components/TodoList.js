import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const {
    todos,
    changeTodoState,
    deleteTodo,
    doubleClick,
    onEditInputChange,
    handleKeyDownEditInput,
    deleteCompleted,
  } = props;

  const doubleClickFromTodoList = (todo) => {
    doubleClick(todo);
  };

  const completedListIsEmpty = () => {
    // const newList = todos.filter((todo) => {
    // if (todo.isCompleted) {
    // return true;
    // } else {
    // return false;
    // }
    // });
    const newList = todos.filter((t) => t.isCompleted);
    return newList.length === 0;
  };

  const listHtml = todos.map((todo) => {
    // return <li key={todo.id}>{todo.title}</li>;
    return (
      <li key={todo.id}>
        <TodoItem
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          isEditing={todo.isEditing}
          changeTodoState={changeTodoState}
          deleteTodo={deleteTodo}
          doubleClickFromTodoList={doubleClickFromTodoList}
          onEditInputChange={onEditInputChange}
          handleKeyDownEditInput={handleKeyDownEditInput}
        />
      </li>
    );
  });

  return (
    <>
      {completedListIsEmpty() ? (
        ""
      ) : (
        <button type="button" onClick={() => deleteCompleted()}>
          Delete all completed
        </button>
      )}

      <ul className={"todo-list"}>{listHtml}</ul>
    </>
  );
}
