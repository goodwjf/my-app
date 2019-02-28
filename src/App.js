import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    data: "loading..."
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    //fetch("http://favor.ie.sogou.com/topNews");
    fetch("/topNews")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data: data.pic_news[0].title });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>proxy ：“{this.state.data}”</div>
        </header>
      </div>
    );
  }
}

export default App;
