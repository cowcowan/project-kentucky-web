import React, { Component } from "react";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserAddress from "./UserAddress";
import Success from "./Success";
import RequestedClinic from "./RequestedClinic";
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
      address,
      city,
      state,
      zipcode,
      requestedClinic,
    } = this.state;

    const values = {
      email,
      firstName,
      middleName,
      lastName,
      address,
      city,
      state,
      zipcode,
      requestedClinic,
    };

    let handleSubmit = async (e) => {
      e.preventDefault();
      console.log("##############" + firstName);
      try {
        let res = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: JSON.stringify({
            name: e.firstName,
            email: e.email,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          // setName("");
          // setEmail("");
          // setMessage("User created successfully");
        } else {
          // setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    switch (step) {
      case 1:
        return (
          <UserName
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserEmail
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <UserAddress
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <RequestedClinic
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <div className="App">
            <form onSubmit={handleSubmit}>
              <button type="submit">Submit</button>{" "}
            </form>
          </div>
        );
      default:
      // do nothing
    }
  }
}
