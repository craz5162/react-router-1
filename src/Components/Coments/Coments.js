import React, { useEffect, useState } from 'react';
import Coment from '../Coment/Coment';
import Header from '../Header/Header';
import './Coments.css'

const Coments = () => {
      const [coments, setComents] = useState([]);
      useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments`)
                  .then(res => res.json())
                  .then(data => setComents(data))
      }, [])
      return (
            <div>
                  <Header></Header>
                  <h2>this is comments</h2>
                  <div className='data-3'>
                        {
                              coments.map(coment => <Coment key={coment.id} coment={coment}></Coment>)
                        }
                  </div>
            </div>
      );
};

export default Coments;