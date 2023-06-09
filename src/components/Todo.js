import React from "react";
import "../styles/Todo.css";
function Todo({ text, handleDelete }) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return (
    <>
      <div className="todo">
        <div className="todo__main">
          <p className="todo__text">{text}</p>
          <button className="todo__delete todo__btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <small className="todo__date">{today}</small>
      </div>
    </>
  );
}

export default Todo;
