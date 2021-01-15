import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <center>
        <input
          className="checked"
          type="checkbox"
          onChange={() => {
            props.handleChange(props.item.id);
          }}
          checked={props.item.completed}
        />
        <span
          style={
            props.item.completed ? { color: "#2a4226" } : { color: "#466642" }
          }
        >
          {props.item.text}
        </span>
      </center>
    </div>
  );
}
export default TodoItem;
