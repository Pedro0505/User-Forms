import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import CreateUser from './pages/CreateUser/CreateUser';
import ShowUser from './pages/ShowUser/ShowUser';
import './style/App.css';

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/" element={ <CreateUser /> } />
          <Route path="/created" element={ <ShowUser /> } />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
