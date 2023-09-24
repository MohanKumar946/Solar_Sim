import React, { useEffect, useRef } from "react";
import "./App.css";
import Canvas from "./components/Canvas"
import CelestialSelector from "./components/CelestialSelector";

const App = () => {
  return (
    <div className="App">
      {/* CelestialSelector component */}


      {/* Canvas component */}
      <div className="CanvasContainer">
        <Canvas />
      </div>
      <div className="CelestialSelector">
        <CelestialSelector />
      </div>
    </div>
  );
};

export default App;
