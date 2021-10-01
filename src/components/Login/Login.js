import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';

const Login = () => {

  const history = useHistory();
  const goHome = () =>{
    history.push('/restaurants');
  }
    return (
        <Box
        sx={{
          backgroundColor: 'snow',
          padding: 3,
          borderRadius:2,
          width: '60%',
          margin: '32px auto',
        }}
      >
        <TextField
        sx={{width: '100%'}}
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
        />
        <br />
        <TextField
        sx={{width: '100%'}}
          helperText="Please enter your email"
          id="demo-helper-text-aligned-no-helper"
          label="Email"
        />
        <br />
        <TextField
        sx={{width: '100%'}}
          helperText="Password"
          id="demo-helper-text-aligned-no-helper"
          label="Password"
        />
        <br />
        <Button onClick={goHome} variant="outlined">Log In</Button>
      </Box>
    );
};

export default Login;