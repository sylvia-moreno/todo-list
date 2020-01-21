import React, {useContext} from 'react';

import { TodoContext } from "../TodoContext";
import Todo from "./todo";



const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);
 

  const toggleDone = (todo) => {
    todos.map(_t => _t === todo ? _t.done = !todo.done : _t)
    setTodos([...todos])
  } 

  const deleteTodo = (todo) => {
    const _todos = todos.filter(_todo => _todo !== todo)
    setTodos(_todos)
  }

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">J'ai {todos.length} de tâches à faire.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
          ))}
        </div>
      </section>
    </div>
  )
}
export default TodoList; 