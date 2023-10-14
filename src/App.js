import { useState } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      {user ? <Dashboard setUser={setUser} /> : <Login  setUser={setUser}/>}
    </div>
  );
}

export default App;
