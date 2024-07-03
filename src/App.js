import React from "react";
import TodoList from "./components/TodoList/TodoList.jsx";
import DogImage from "./components/RandomImage/DogImage.jsx";
import ToggleButton from "./components/ToggleButton/ToggleButton.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TodoList />
      <DogImage />
      <ToggleButton />
    </div>
  );
};

export default App;
