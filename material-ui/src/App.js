import { Grid, Typography } from "@mui/material";
import "./App.css";
import NavBar from "./NavBar";
import RecipeReviewCard from "./Card";

function App() {
  const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item sx={{ background: "red" }}>
          <NavBar />
        </Grid>
        <Grid
          item
          container
          sx={{ background: "green" }}
          justifyContent="center"
        >
          <Grid item xs={12} md={2} />
          <Grid
            item
            xs={12}
            md={8}
            container
            sx={{ background: "blue" }}
            spacing={2}
            justifyContent="space-evenly"
          >
            {cars.map((car) => (
              <Grid item>
                <RecipeReviewCard />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
