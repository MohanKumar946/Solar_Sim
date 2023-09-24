// components/CelestialSelector.js
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

function CelestialSelector() {
  const [selectedCelestialBody, setSelectedCelestialBody] = useState("sun");
  const [sunRadius, setSunRadius] = useState(70); // Initial sun radius
  const [mass, setMass] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  const handleSelectionChange = (e) => {
    setSelectedCelestialBody(e.target.value);
  };

  const planets =  {Sun : 'Sun', Mercury : 'Mercury', Venus : 'Venus', Earth : 'Earth', Moon : 'Moon ', Mars : 'Mars',Jupiter : 'Jupiter', Saturn : 'Saturn', Uranus : 'Uranus',Neptune : 'Neptune'}

  return (
    <div > 
      <label style={{marginRight: 15, fontSize: 20}}>Select a Celestial Body</label>
      <select style={{height: 30, width: 125, borderRadius: 15}} onChange={handleSelectionChange}>
        <option value="sun">{planets.Sun}</option>
        <option value="moon">{planets.Mercury}</option>
        <option value="planet">{planets.Venus}</option>
        <option value="planet">{planets.Earth}</option>
        <option value="planet">{planets.Moon}</option>
        <option value="planet">{planets.Mars}</option>
        <option value="planet">{planets.Jupiter}</option>
        <option value="planet">{planets.Saturn}</option>
        <option value="planet">{planets.Uranus}</option>
        <option value="planet">{planets.Neptune}</option>
      </select>

      {selectedCelestialBody ?
          <Form className="input-container">
          <Form.Group className="styled-input" controlId="mass">
            <div style={{marginBottom: 10}}>
            <Form.Label >Radius</Form.Label>
            </div>
            <Form.Control className="input"
              type="number"
              min ='0'
              placeholder="Enter Radius"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
            />
          </Form.Group>
          <Form.Group  className="styled-input" controlId="height">
          <div style={{marginBottom: 10}}>
            <Form.Label >Mass</Form.Label>
            </div>
            <Form.Control className="input"
              type="number"
              min = '0'
              placeholder="Enter Mass"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="styled-input" controlId="width">
          <div style={{marginBottom: 10}}>
            <Form.Label >G force</Form.Label>
            </div>
            <Form.Control className="input"
              type="number"
              min='0'
              placeholder="Enter G Force"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </Form.Group>
          </Form>
      : ''}

      {/* Add similar sections for moon and planets */}
    </div>
  );
}

export default CelestialSelector;
