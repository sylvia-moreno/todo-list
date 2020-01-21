import React from 'react';

import { TodoProvider } from "./TodoContext";
import Navbar from "./components/navbar";
import TodoList from "./components/todolist";

const App = () => {
  return (
    <TodoProvider>
      <Navbar/>
      <TodoList/>
    </TodoProvider>
  );
}

export default App;
