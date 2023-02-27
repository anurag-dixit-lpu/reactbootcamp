import logo from "./logo.svg";
import "./App.css";

import React from "react";

class Mounting extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { favoriteColor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");

    return { favoriteColor: props.favCol };
  }

  render() {
    console.log("render");

    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }
}

class Updating extends React.Component {
  constructor(props) {
    console.log("constructor");

    super(props);
    this.state = { favoriteColor: "red" };
  }

  // static getDerivedStateFromProps(props, state) { // 1
  //   console.log("getDerivedStateFromProps");

  //   return { favoriteColor: props.favCol };
  // }

  // shouldComponentUpdate() { // 2
  //   return false;
  // }

  changeColor = () => {
    console.log("changeColor");

    this.setState({ favoriteColor: "pink" });
  };

  render() {
    console.log("render");

    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

class UpdatingSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoriteColor;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoriteColor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default UpdatingSnapshot;
