import React from 'react';
import './Coment.css'

const Coment = ({coment}) => {
      const {name, id, email, body} = coment;
      return (
            <div className='coment'>
                  <h1>ID : {id}</h1>
                  <h2>Name : {name}</h2>
                  <h6>Email : {email}</h6>
                  <p>body : {body}</p>
            </div>
      );
};

export default Coment;