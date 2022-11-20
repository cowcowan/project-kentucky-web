import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

export const UserDetails = ({ nextStep, handleChange, values }) => {
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          What is your full legal name?
        </Typography>
        <form>
          <Grid container spacing={20}>
            {/* firstName */}
            <Grid item xs={12}>
              <TextField
                placeholder="firstName"
                label="firstName"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                autoComplete="firstName"
                fullWidth
              />
            </Grid>
            <br />
            {/* middleName */}
            <Grid item xs={12}>
              <TextField
                placeholder="middleName"
                label="middleName"
                onChange={handleChange("middleName")}
                defaultValue={values.middleName}
                autoComplete="middleName"
                fullWidth
                type="middleName"
              />
            </Grid>
            {/* lastName */}
            <Grid item xs={12}>
              <TextField
                placeholder="lastName"
                label="lastName"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                autoComplete="lastName"
                fullWidth
                type="lastName"
              />
            </Grid>
          </Grid>
          <br />
          <Button
            onClick={Continue}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UserDetails;
