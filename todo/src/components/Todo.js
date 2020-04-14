import React from "react";

function Todo(props) {
  return (
    <div>
      <h2
        className={props.item.completed ? "completed" : ""}
        onClick={(e) => {
          console.log(props.item.id)
          props.handleComplete(props.item.id);
        }}
      >
        {props.item.todo}
      </h2>
    </div>
  );
}
export default Todo;
