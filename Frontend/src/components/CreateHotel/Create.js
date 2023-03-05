import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { useFetch } from '../../hooks/useFetch';
import "./Create.css"

export default function Create() {
  //states:
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [addStatus, setAddstatus] = useState(false)

  const { postData, data, error } = useFetch('http://localhost:3000/hotels', 'POST')

  const handleClick = (e) => {
    e.preventDefault()
    postData({ name, city, location })
    setAddstatus(true)

  }


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off" 
    >
      {!error && addStatus && <Alert severity="success">This is a success alert!</Alert>}
      {error && <Alert severity="error">This is an error alert!</Alert>}

      <div>
        <TextField
            id= "name"
            label="Name"
            value={name}
            onChange = {e => setName(e.target.value)}
            required
            autoFocus

            
        />
      </div>
      <div>
        <TextField
            id= "city"
            label="City"
            value={city}
            onChange = {e => setCity(e.target.value)}
            required
        />
      </div>

      <div>
      <TextField
          id= "location"
          label="Location"
          value={location}
          onChange = {e => setLocation(e.target.value)}
          required

      />
      </div>

      <div>
      <TextField
          id= "address"
          label="Address"
          value={address}
          onChange = {e => setAddress(e.target.value)}

          required

      />
      </div>

      <div>
      <TextField
          id= "postal-code"
          label="Postal Code"
          value={postalCode}
          onChange = {e => setPostalCode(e.target.value)}
          required

      />
      </div>

      <div>
        <Button id = "submit" variant="contained" size="medium"  onClick={handleClick}>
            Submit
        </Button>
      </div>
    </Box>
  )
}
