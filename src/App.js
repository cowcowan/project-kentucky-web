import React, { Component } from "react";
import Signup from "./components/Signup";
import hospital from "./img/hospital.jpg";

const styles = {
  header: {
    backgroundImage: `url(${hospital})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // color: "white",
  },
};
class App extends Component {
  render() {
    return (
      <div style={styles.header}>
        <div style={styles.content}>
          <Signup />
        </div>
      </div>
    );
  }
}

export default App;
