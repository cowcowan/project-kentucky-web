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
          Mailing Address
        </Typography>
        <form>
          {/* Address */}
          <Grid item xs={12}>
            <TextField
              placeholder="Address"
              label="Address"
              onChange={handleChange("address")}
              defaultValue={values.address}
              autoComplete="address"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2}>
            {/* City */}
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder="City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* State */}
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder="State"
                label="State"
                onChange={handleChange("state")}
                defaultValue={values.lastName}
              />
            </Grid>

            {/* Zipcode */}
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder="Zip code"
                label="Zip cde"
                onChange={handleChange("zip code")}
                defaultValue={values.zipcode}
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
