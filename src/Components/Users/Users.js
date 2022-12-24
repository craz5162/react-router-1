import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import User from '../User/User';
import './Users.css'

const Users = () => {
      const [users, setUsers] = useState ([]);
      useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
      },[])
      return (
            <div>
                  <Header></Header>
                  <h2>this is users</h2>
                  <div className="data-1">
                  {
                        users.map(user => <User key={user.id} user ={user}></User>)
                  }
                  </div>
            </div>
      );
};

export default Users;
