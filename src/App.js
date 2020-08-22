import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import ReviewsSection from "./ReviewsSection";
import About from "./About";
import Home from "./Home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="reviews">
       <Home 
       id="home"
       />

        <ReviewsSection 
        id="reviews1" 
        />
        

        </div>

        

        <Section
          id="news"
        />
        <About
          id="about"
        />
        
      </div>
    );
  }
}

export default App;

