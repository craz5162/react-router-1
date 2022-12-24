import React from 'react';
import './Todo.css'

const Todo = ({todo}) => {
      const {id, userId, title, completed} = todo;
      return (
            <div className='todo'>
                  <h2>Id : {id}</h2>
                  <h4>UserId : {userId}</h4>
                  <p>Title : {title}</p>
                  <p><small>Completed : {completed}</small></p>
            </div>
      );
};

export default Todo;