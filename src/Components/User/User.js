import React from 'react';
import './User.css'

const User = ({user}) => {
      const {name, id, phone, email} = user;
      return (
            <div className='user'>
                  <h2>Name : {name}</h2>
                  <h2>Id : {id}</h2>
                  <h4>phone : {phone}</h4>
                  <p>email : {email}</p>
            </div>
      );
};

export default User;