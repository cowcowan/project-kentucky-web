import React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const LandingPage = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h6" align="center">
          Request Medical Record from Datavant HealthCare
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Ok, Let's Go!
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LandingPage;
