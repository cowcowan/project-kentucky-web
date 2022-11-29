import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const SubmitForm = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://project-kentucky.herokuapp.com/kentucky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          email: values.email,
          street: values.street,
          city: values.city,
          state: values.state,
          zipcode: values.zipcode,
          requestedClinic: values.requestedClinic,
          dob: values.dob,
          timeframe: values.timeframe,
          requestOwnRecord: values.requestOwnRecord,
          reasonForRequest: values.reasonForRequest,
          recordType: values.recordType,
          expireDate: values.expireDate,
          recipient: values.recipient,
          deliverMethod: values.deliverMethod,
          ssn: values.ssn,
        }),
      });
      if (res.status === 201) {
        alert("Medical Record Request Submitted");
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Submit your medical record request!
        </Typography>
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
            <form onSubmit={handleSubmit}>
              <Button
                // onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SubmitForm;
