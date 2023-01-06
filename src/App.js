import './App.css';
import Pages from "./pages/index.js";
import Auth from './pages/auth';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import Todo from './pages/todo';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import { useState, useEffect } from 'react';
function App() {
  const [signinToggle, setSigninToggle] = useState(false);
  useEffect(() => {
    const signinToken = localStorage.getItem('token');
    if (signinToken) {
      setSigninToggle(true);
    } else {
      setSigninToggle(false);
    }
  })
  return (
    <div className="App">
      <Header signinToggle={signinToggle} setSigninToggle={setSigninToggle} />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Pages />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/auth/signup' element={<Signup />} />
          <Route path='/auth/signin' element={<Signin setSigninToggle={setSigninToggle} />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
