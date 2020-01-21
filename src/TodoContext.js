import React, {createContext, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      "id": Date.now(),
      "value": "Passer à la boulangerie",
      "done": false
    },
    {
      "id": Date.now(),
      "value": "Récupérer le colis chez la Poste",
      "done": false  
    }
  ]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  )
}
