import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
      const [todos, setTodos] = useState([])
      useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setTodos(data))
}, [])

return (
      <div>
            <Header></Header>
            <h2>this is todos</h2>
            <div className="data-2">
                  {
                        todos.map(todo => <Todo key={todo.id} todo = {todo}></Todo>)
                  }
            </div>
      </div>
);
};

export default Todos;