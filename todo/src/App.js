import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/todoList";
import reducer, { initialState } from "./reducers/reducer";
import "./App.css";
import{v4 as uuidv4} from 'uuid';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: uuidv4(),
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  const handleComplete = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO" });
  };
  return (
    <div className="App">
      <h1> To Do List</h1>
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <button
        onClick={(e) => {
          e.preventDefault();
          clearCompleted();
        }}
      >
        Clear Task
      </button>
    </div>
  );
}

export default App;
