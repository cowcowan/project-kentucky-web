import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const UserAddress = ({ prevStep, nextStep, handleChange, values }) => {
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
          What hospital or clinic are you requesting records from?
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* RequestedClinic */}
            <Grid item xs={12}>
              <TextField
                placeholder="Requested Clinic"
                label="Clinic name"
                onChange={handleChange("RequestedClinic")}
                defaultValue={values.requestedClinic}
                autoComplete="Requested Clinic"
                fullWidth
              />
            </Grid>

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

export default UserAddress;
