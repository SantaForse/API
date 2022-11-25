import React from 'react';
import './App.css';
import UserProvider from './contexts/UserContext';
import UserList from './components/UserList';
import CreateForm from './components/CreateForm';



function App() {
 
  return (
    <UserProvider>
      <div className="container mt-5">
        <CreateForm />
        <hr className="my-5" />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
