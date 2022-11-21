import React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const RequestDetails1 = ({ prevStep, nextStep, handleChange, values }) => {
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
          What's the primary reason for requesting records?
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="patient-request"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="patient-request"
                    control={<Radio />}
                    label="Patient Request"
                  />
                  <FormControlLabel
                    value="continued-care"
                    control={<Radio />}
                    label="Continued Care"
                  />
                  <FormControlLabel
                    value="maternal-health-records"
                    control={<Radio />}
                    label="Maternal Health Records"
                  />
                  <FormControlLabel
                    value="Other reason"
                    control={<Radio />}
                    label="Other reason"
                  />
                </RadioGroup>
              </FormControl>
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

export default RequestDetails1;
