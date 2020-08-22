import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import ReviewsSection from "./ReviewsSection";
import About from "./About";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="reviews">

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

