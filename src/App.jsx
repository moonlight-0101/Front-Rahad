import React from 'react';

import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const router=useRoutes(routes)
  return (
    <div>
      
      <div>{router}</div>
    </div>
  );
};

export default App;