import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Coments from '../Coments/Coments';
import Nothing from '../Nothing/Nothing';
import Todos from '../Todos/Todos';
import Users from '../Users/Users';

const Headers = () => {
      const router = createBrowserRouter([
            {path : '/', element :<Nothing></Nothing> },
            {path : '/Users', element : <Users></Users>},
            {path : '/Coments', element : <Coments></Coments>},
            {path : '/Todos', element : <Todos></Todos>}
      ])
      return (
            <div>
                  <RouterProvider router={router}></RouterProvider>
            </div>
      );
};

export default Headers;