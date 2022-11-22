import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

export const UserDob = ({ prevStep, nextStep, handleChange, values }) => {
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          What is your date of birth? (mm/dd/yyyy)
        </Typography>
        <form>
          {/* Address */}
          <Grid item xs={12}>
            <TextField
              placeholder="dob"
              label="mm/dd/yyyy"
              onChange={handleChange("dob")}
              defaultValue={values.dob}
              autoComplete="dob"
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default UserDob;
