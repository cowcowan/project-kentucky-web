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
          Great, which location would you like to request from?
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  row
                  onChange={handleChange("location")}
                >
                  <FormControlLabel
                    value="emory_university_hospital"
                    control={<Radio />}
                    label="Emory University Hospital"
                  />
                  <FormControlLabel
                    value="emory_children_center"
                    control={<Radio />}
                    label="Emory Children’s Center"
                  />
                  <FormControlLabel
                    value="emory_johns_creek_hospital"
                    control={<Radio />}
                    label="Emory Johns Creek Hospital"
                  />
                  <FormControlLabel
                    value="emory_university_hospital_midtown"
                    control={<Radio />}
                    label="Emory University Hospital Midtown"
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
