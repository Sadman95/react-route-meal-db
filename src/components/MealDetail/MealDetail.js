import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";

const tableStyle = { maxWidth: 650, 
                    border: "1px solid lightgrey",
                    borderRadius: 5, 
                    margin: "auto",
                    backgroundColor: 'black'}


const MealDetail = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/restaurants");
  };
  const { mealId } = useParams();

  const [meal, setMeal] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  },);

  return (
    <TableContainer sx={{ margin: '16px 0' }}>
      <Table
        sx={tableStyle}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "bold", color: "goldenrod", fontSize: 22 }}
              align="center"
            >
              Ingredients
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "goldenrod", fontSize: 22 }}
              align="center"
            >
              Measurement
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meal.map((detail) => (
            <>
              <TableRow>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strIngredient1}</TableCell>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strMeasure1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strIngredient2}</TableCell>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strMeasure2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strIngredient3}</TableCell>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strMeasure3}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strIngredient4}</TableCell>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strMeasure4}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strIngredient5}</TableCell>
                <TableCell sx={{color: 'lightgrey'}} align="center">{detail.strMeasure5}</TableCell>
              </TableRow>
              <TableRow sx={{color: 'lightgrey'}}>
                  <h3>Instructions:</h3>
                  <TableCell sx={{color: 'lightgrey'}} align="left">
                      {detail.strInstructions}
                  </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
      <br />
      <Button onClick={goBack} variant="contained">
        Go Back
      </Button>
    </TableContainer>
  );
};

export default MealDetail;
