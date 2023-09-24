// components/CelestialSelector.js
import React, { useState } from "react";

function CelestialSelector() {
  const [selectedCelestialBody, setSelectedCelestialBody] = useState("sun");
  const [sunRadius, setSunRadius] = useState(70); // Initial sun radius

  const handleSelectionChange = (e) => {
    setSelectedCelestialBody(e.target.value);
  };

  return (
    <div>
      <label>Select a Celestial Body:</label>
      <select onChange={handleSelectionChange}>
        <option value="sun">Sun</option>
        <option value="moon">Moon</option>
        <option value="planet">Planet</option>
      </select>

      {selectedCelestialBody === "sun" && (
        <div>
          <label>Sun Radius:</label>
          <input
            type="number"
            value={sunRadius}
            onChange={(e) => setSunRadius(e.target.value)}
          />
        </div>
      )}

      {/* Add similar sections for moon and planets */}
    </div>
  );
}

export default CelestialSelector;