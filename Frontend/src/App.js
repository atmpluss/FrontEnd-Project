import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {useState} from 'react'

function App() {
  const [userVerified, setUserVerified] = useState(false)
  

  return (
    <div className='App'>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ userVerified ? <Home setUserVerified = {setUserVerified} /> : <Navigate to='/login' />} />
        <Route path="/login" element={<Login userVerified = {userVerified} setUserVerified = {setUserVerified} />} />
        

      </Routes>
   </BrowserRouter>

    </div>
    
  );
}

export default App;
