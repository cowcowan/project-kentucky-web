import React, { Component } from "react";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserAddress from "./UserAddress";
import RequestedClinic from "./RequestedClinic";
import SubmitForm from "./SubmitForm";
import RequestDetails1 from "./RequestDetails1";
import RequestDetails2 from "./RequestDetails2";
import RequestDetails3 from "./RequestDetails3";
import RequestDetails4 from "./RequestDetails4";
import RequestDetails5 from "./RequestDetails5";
import RequestDetails6 from "./RequestDetails6";
import RequestDetails7 from "./RequestDetails7";
import Disclosure from "./Disclosure";
import UserDob from "./UserDob";
import LandingPage from "./LandingPage";
import UserSSN from "./UserSSN";

export default class Signup extends Component {
  state = {
    step: 1,
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    const {
      email,
      firstName,
      middleName,
      lastName,
      street,
      city,
      state,
      zipcode,
      requestedClinic,
      dob,
      requestOwnRecord,
      timeframe,
      reasonForRequest,
      recordType,
      expireDate,
      recipient,
      deliverMethod,
      ssn,
    } = this.state;

    const values = {
      email,
      firstName,
      middleName,
      lastName,
      street,
      city,
      state,
      zipcode,
      requestedClinic,
      dob,
      requestOwnRecord,
      timeframe,
      reasonForRequest,
      recordType,
      expireDate,
      recipient,
      deliverMethod,
      ssn,
    };

    switch (step) {
      case 1:
        return (
          <LandingPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserName
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <UserEmail
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <UserAddress
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <UserDob
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <UserSSN
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <RequestedClinic
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <RequestDetails1
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 9:
        return (
          <RequestDetails2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 10:
        return (
          <RequestDetails3
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 11:
        return (
          <RequestDetails4
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 12:
        return (
          <RequestDetails5
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 13:
        return (
          <RequestDetails6
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 14:
        return (
          <RequestDetails7
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 15:
        return (
          <Disclosure
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 16:
        return (
          <SubmitForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
      // do nothing
    }
  }
}
