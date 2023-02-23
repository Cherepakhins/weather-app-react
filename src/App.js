import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainblock from "./components/blocks/main-block/main-block";
import "./reset.css";
import "./index.css";
import Nav from './components/nav/nav';
import GridCollection from "./components/gallery/grid-photos/grid-photos";
class App extends React.Component {
  
  render() {
    return (
      <div>      
        <Router>
          <Nav /> 
          <Routes>
            <Route path="/" element={<Mainblock />} />
            <Route path="/gridCollection" element={<GridCollection />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;