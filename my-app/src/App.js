import React from 'react';
import {AuthContextProvider} from './routes/AuthContext';
import Router from './routes/Router';

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Router/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
