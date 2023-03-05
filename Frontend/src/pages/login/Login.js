import React from 'react'
import { useState } from 'react'
import {
    useNavigate
} from "react-router-dom";


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import  './Login.css'


export default  function Login({userVerified, setUserVerified}) {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [passwordError, setPasswordError]= useState(false)

    
    const navigate = useNavigate();
    const axios = require('axios');


    React.useEffect(() => {
        if (userVerified) {
          navigate('/');
        }
      },[userVerified, navigate]);
    
      React.useEffect(()=>{
        console.log("user-info", localStorage.getItem("user-info"))
        if(localStorage.getItem("user-info")){
          setUserVerified(true)
          navigate('/');
        }
      },[setUserVerified, navigate])

  const handleSubmit = async (e)=>{
        e.preventDefault();
        let sendObj = {email,password}

    const apitest = await axios.post('http://localhost:3002/login', sendObj)
    console.log("apitest: ",apitest);
    if(apitest.status === 200 && apitest.data === 'success' ){
      setUserVerified(true)
      localStorage.setItem("user-info",JSON.stringify(sendObj))
    }else{
      setUserVerified(false)
      setPasswordError(true)
    }

  }

  return (
    <div className='login'>
      <main>
        {passwordError && <Alert severity="error">This is an error message!</Alert>
}
       
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off" 
    >
      <h3>Login</h3>
      <div>
      <TextField
          id= "username"
          label="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
      <TextField
          id= "password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <div>

      <Button id = "login" variant="contained" size="medium" onClick={handleSubmit}>
          Login
      </Button>

      </div>
    </Box>

    

      </main>


      <aside>
        <div>
          <h1> BOOKII ADMIN </h1>
        </div>
      </aside>
    </div>
    
    
    
  )
}
