import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { grey } from "@mui/material/colors";
import { Box } from '@mui/system';

const Header = () => {
    
    const history = useHistory();
    const gotoHome = () => {
        history.push("/");
      };
    const handleAll = () => {
      history.push("/restaurants");
    };
    const gotoContact = () => {
      history.push("/login");
    };


    return (
        <Box
        sx={{
          width: '80%',
          margin: 'auto',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: grey[400] }}>Meal DB</h1>
        <nav style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <>
            <Button onClick={gotoHome} variant="contained">Home</Button>
            <Button variant="contained" onClick={handleAll}>
              All Meals
            </Button>
            <Button variant="contained" onClick={gotoContact}>
              Log In
            </Button>
          </>
        </nav>
      </Box>
    );
};

export default Header;