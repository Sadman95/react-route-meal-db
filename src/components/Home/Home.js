import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { red } from "@mui/material/colors";
import { blueGrey } from "@mui/material/colors";

const Home = () => {
    const bannrTextStyle = { color: blueGrey[500], position: 'absolute',left: '50%', top:'50%', transform: 'translate(-50%,-50%)' };
  const history = useHistory();
  const handleAll = () => {
    history.push("/restaurants");
  };
  const gotoContact = () => {
    history.push("/login");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: red[500] }}>Meal DB</h1>
        <nav style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <>
            <Button variant="contained">Home</Button>
            <Button variant="contained" onClick={handleAll}>
              All Meals
            </Button>
            <Button variant="contained" onClick={gotoContact}>
              Log In
            </Button>
          </>
        </nav>
      </div>
      <h1 style={bannrTextStyle}>Welcome To Meal DB Reastaurant!!!</h1>
    </>
  );
};

export default Home;
