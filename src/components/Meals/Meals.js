import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
 
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Meals = (props) => {
  const {
    idMeal,
    strMealThumb,
    strTags,
    strMeal,
    strCategory,
  } = props.meal;

  return (
    <Card sx={{ maxWidth: 345, height: 320, textAlign: 'left' }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{strCategory[0]}</Avatar>}
        title={strMeal}
        subheader={strTags}
      />
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
        alt="Paella dish"
        style={{marginBottom: 16}}
      />
      <NavLink
        to={`/mealdetail/${idMeal}`}
        style={{textDecoration: 'none',
                color: 'lavender',
                backgroundColor: 'slateblue',
                padding: 8,
                borderRadius: 2,
                }}
        
      >
        Recipe
      </NavLink>
    </Card>
  );
};

export default Meals;
