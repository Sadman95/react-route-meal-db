import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Meals from "../Meals/Meals";

const Restaurants = () => {

    const linkStyle = {display:'block',marginRight:10,color:"white",textAlign: 'right', textDecoration:"none",fontSize:22};

  const [searchText, setSearchtext] = useState('');
  const displayMeals = e =>{
      const searchValue = e.target.value;
      setSearchtext(searchValue);
  }

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <>
    
      <Box
        sx={{
          backgroundColor: 'snow',
          padding: 1,
          borderRadius: 2,
          margin: '16px auto',
          width: '80%',
          maxWidth: "100%",
        }}
      >
        <TextField onChange={displayMeals} fullWidth label="Search meals here" id="fullWidth" />
      </Box>

      <Box sx={{ flexGrow: 1, padding: 2}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {meals.map((meal) => (
            <Grid key={meal.idMeal} item xs={1} sm={4} md={4} lg={3}>
              <Meals meal={meal}></Meals>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Link style={linkStyle} to='/'>
        Back</Link>
    </>
  );
};

export default Restaurants;
