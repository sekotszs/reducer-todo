import React from "react";

export const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat(action.payload);
    case "COMPLETED_TODO":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });
    case "CLEAR_COMPLETED_TODO":
      return state.filter((item) => !item.completed);

    case "return state":
      return state;
  }
};

export default reducer;
