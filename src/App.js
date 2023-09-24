
import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Define the solar system properties

    var scale = 63;
    var scaleLabel = 8;
    const sun = {
      radius: scale*0.7,
      color: 'yellow',
      name: 'sun',
    };

    const planets = [
      {
        name: 'Mercury',
        radius: 5,
        color: 'gray',
        distance: scale,
        angle: 0,
        angularSpeed: 0.02,
        scaleLabel : scaleLabel
      },
      {
        name: 'Venus',
        radius: 8,
        color: 'orange',
        distance: scale*1.5,
        angle: 0,
        angularSpeed: 0.015,
        scaleLabel : scaleLabel*1.2,
      },
      {
        name: 'Earth',
        radius: 10,
        color: 'blue',
        distance: scale*2,
        angle: 0,
        angularSpeed: 0.01,
        scaleLabel : scaleLabel*1.5,
      },
      {
        name: 'Mars',
        radius: 7,
        color: 'red',
        distance: scale*2.5,
        angle: 0,
        angularSpeed: 0.008,
        scaleLabel : scaleLabel*1.5,
      },
      {
        name: 'Jupiter',
        radius: 20,
        color: 'orange',
        distance: scale*3.5,
        angle: 0,
        angularSpeed: 0.005,
        scaleLabel : scaleLabel*2.8
      },
      {
        name: 'Saturn',
        radius: 18,
        color: 'yellow',
        distance: scale*4.5,
        angle: 0,
        angularSpeed: 0.004,
        scaleLabel : scaleLabel*2.3,
      },
      {
        name: 'Uranus',
        radius: 15,
        color: 'lightblue',
        distance: scale*5.50,
        angle: 0,
        angularSpeed: 0.003,
        scaleLabel : scaleLabel*1.9
      },
      {
        name: 'Neptune',
        radius: 14,
        color: 'blue',
        distance: scale*6.50,
        angle: 0,
        angularSpeed: 0.002,
        scaleLabel : scaleLabel*1.9
      },
    ];

    const drawSolarSystem = () => {

      var fontSize = 12;
      var fontFamily = 'Open Sans';
      var textBaseline = 'top';
      var textAlign = 'center';

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.strokeStyle = 'rgba(169, 169, 169, 0.2)';
      context.beginPath();
      planets.forEach((planet) => {
        const orbitX = canvas.width / 2;
        const orbitY = canvas.height / 2;
        context.arc(orbitX, orbitY, planet.distance, 0, Math.PI * 2);
      });
      context.stroke()

      context.fillStyle = 'red';
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, sun.radius, 0, Math.PI * 2);
      context.font = fontSize + 'px ' + fontFamily;
      context.font = fontSize + 'px ' + fontFamily;
      context.textAlign = textAlign;
      context.textBaseline = textBaseline;
      context.fillStyle = sun.color;
      context.fillText(sun.name, canvas.width/2, canvas.height/2+canvas.scaleLabel*3);
      context.fill();


      planets.forEach((planet) => {
        context.fillStyle = planet.color;
        const planetX = canvas.width / 2 + planet.distance * Math.cos(planet.angle);
        const planetY = canvas.height / 2 + planet.distance * Math.sin(planet.angle);
        context.beginPath();
        context.arc(planetX, planetY, planet.radius, 0, Math.PI * 2,);
        context.font = fontSize + 'px ' + fontFamily;
        context.font = fontSize + 'px ' + fontFamily;
        context.textAlign = textAlign;
        context.textBaseline = textBaseline;
        context.fillStyle = planet.color;
        context.fillText(planet.name, planetX, planetY+planet.scaleLabel);
        context.fill();

        planet.angle += planet.angularSpeed;
      });

      requestAnimationFrame(drawSolarSystem);
    };

    drawSolarSystem();
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{backgroundColor : 'black'}}></canvas>
    </div>
  );
};

export default App;


