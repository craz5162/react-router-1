import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div className='link'>
                  <Link to={'/Users'}>Users</Link>
                  <Link to={'/Todos'}>Todos</Link>
                  <Link to={'/Coments'}>Coments</Link>
            </div>
      );
};

export default Header;