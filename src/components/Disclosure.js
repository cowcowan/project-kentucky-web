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
  TextField,
  Box,
} from "@material-ui/core";

const Disclosure = ({ prevStep, nextStep, handleChange, values }) => {
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
          Sensitive Records Disclosure
        </Typography>

        <form>
          <Grid container spacing={2}>
            <TextField
              placeholder="I understand that the medical record released pursuant to this authorization could contain information concerning drug related conditions, alcoholism, psychological conditions, psychiatric conditions, and/or blood borne infectious disease, which are subject to federal and/or state restrictions on disclosure. I understand that if the person or entity that receives the information is not a health care provider or health plan covered by federal privacy regulations, the information described above may be re-disclosed and no longer protected by these regulations. I hereby affirm that I have read and fully understand the above statements and consent to the disclosure of the medical record for the purpose and extent stated above."
              multiline
              rows={5}
              rowsMax={10}
              fullWidth
              margin="normal"
            />

            <Grid item xs={12} sm={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="after180days"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="confirm"
                    control={<Radio />}
                    label="By clicking Yes you agree to abide by the Terms of
                        Service outlined above"
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

export default Disclosure;
