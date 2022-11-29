import React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const RequestDetails8 = ({ prevStep, nextStep, handleChange, values }) => {
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
        <Typography component="h1" variant="h6">
          When should this request expire? (mm/dd/yyyy)
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                placeholder="expire"
                label="expire"
                onChange={handleChange("expire")}
                defaultValue={values.expire}
                autoComplete="expire"
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

export default RequestDetails8;
