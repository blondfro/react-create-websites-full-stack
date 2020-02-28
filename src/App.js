import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import Homepage from "./pages/HomePage";

function App() {
  return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
  );
}

export default App;
