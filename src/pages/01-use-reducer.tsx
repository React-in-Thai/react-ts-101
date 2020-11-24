import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function App() {
  // state & dispatch should have correct type
  const [state, dispatch] = useReducer(reducer, { count: 0, status: "idle" });
  const handleClick = () => {
    dispatch({ type: "INCREASE" });
  };
  return <button onClick={handleClick}>Click</button>;
}

function App2() {
  // state & dispatch should have correct type
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    images: [],
    videos: [],
  });
}
