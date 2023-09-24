import React, { useRef, useEffect } from "react";

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match the viewport dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Your drawing code here
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Define the solar system properties

    var scale = 63;
    var scaleLabel = 8;
    const sun = {
      radius: scale * 0.7,
      color: "yellow",
      name: "Sun",
    };

    const planets = [
      {
        name: "Mercury",
        radius: 5,
        color: "gray",
        distance: scale,
        angle: 0,
        angularSpeed: 0.02,
        scaleLabel: scaleLabel,
      },
      {
        name: "Venus",
        radius: 8,
        color: "orange",
        distance: scale * 1.5,
        angle: 0,
        angularSpeed: 0.015,
        scaleLabel: scaleLabel * 1.2,
      },
      {
        name: "Earth",
        radius: 10,
        color: "blue",
        distance: scale * 2,
        angle: 0,
        angularSpeed: 0.01,
        scaleLabel: scaleLabel * 1.5,
      },
      {
        name: "Mars",
        radius: 7,
        color: "red",
        distance: scale * 2.5,
        angle: 0,
        angularSpeed: 0.008,
        scaleLabel: scaleLabel * 1.5,
      },
      {
        name: "Jupiter",
        radius: 20,
        color: "orange",
        distance: scale * 3.5,
        angle: 0,
        angularSpeed: 0.005,
        scaleLabel: scaleLabel * 2.8,
      },
      {
        name: "Saturn",
        radius: 18,
        color: "yellow",
        distance: scale * 4.5,
        angle: 0,
        angularSpeed: 0.004,
        scaleLabel: scaleLabel * 2.3,
      },
      {
        name: "Uranus",
        radius: 15,
        color: "lightblue",
        distance: scale * 5.5,
        angle: 0,
        angularSpeed: 0.003,
        scaleLabel: scaleLabel * 1.9,
      },
      {
        name: "Neptune",
        radius: 14,
        color: "blue",
        distance: scale * 6.5,
        angle: 0,
        angularSpeed: 0.002,
        scaleLabel: scaleLabel * 1.9,
      },
    ];

    const moon = {
      name: "Moon",
      radius: 3,
      color: "gray",
      // Adjust the distance relative to Earth
      distance: planets[2].radius + 15,
      angle: 0,
      // Set a unique angular speed for the moon
      angularSpeed: 0.03,
      scaleLabel: scaleLabel * 0.5, // Adjust the label size
    };

    planets[2].moon = moon;

    const drawSolarSystem = () => {
      var fontSize = 12;
      var fontFamily = "Open Sans";
      var textBaseline = "top";
      var textAlign = "center";

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.strokeStyle = "rgba(169, 169, 169, 0.2)";
      context.beginPath();
      planets.forEach((planet) => {
        const orbitX = canvas.width / 2;
        const orbitY = canvas.height / 2;
        context.arc(orbitX, orbitY, planet.distance, 0, Math.PI * 2);
      });
      context.stroke();

      context.fillStyle = "red";
      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        sun.radius,
        0,
        Math.PI * 2
      );
      context.font = fontSize + "px " + fontFamily;
      context.font = fontSize + "px " + fontFamily;
      context.textAlign = textAlign;
      context.textBaseline = textBaseline;
      context.fillStyle = sun.color;
      context.fillText(
        sun.name,
        canvas.width / 2,
        canvas.height / 2 + canvas.scaleLabel * 3
      );
      context.fill();

      planets.forEach((planet) => {
        context.fillStyle = planet.color;
        const planetX =
          canvas.width / 2 + planet.distance * Math.cos(planet.angle);
        const planetY =
          canvas.height / 2 + planet.distance * Math.sin(planet.angle);
        context.beginPath();
        context.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
        context.font = fontSize + "px " + fontFamily;
        context.font = fontSize + "px " + fontFamily;
        context.textAlign = textAlign;
        context.textBaseline = textBaseline;
        context.fillStyle = planet.color;
        context.fillText(planet.name, planetX, planetY + planet.scaleLabel);
        context.fill();

        planet.angle += planet.angularSpeed;

        if (planet.moon) {
          // Calculate the moon's position relative to its planet
          const moonX =
            planetX + planet.moon.distance * Math.cos(planet.moon.angle);
          const moonY =
            planetY + planet.moon.distance * Math.sin(planet.moon.angle);

          // Draw the moon
          context.fillStyle = planet.moon.color;
          context.beginPath();
          context.arc(moonX, moonY, planet.moon.radius, 0, Math.PI * 2);
          context.font = fontSize + "px " + fontFamily;
          context.textAlign = textAlign;
          context.textBaseline = textBaseline;
          context.fillStyle = planet.moon.color;
          context.fillText(
            planet.moon.name,
            moonX,
            moonY + planet.moon.scaleLabel
          );
          context.fill();

          // Update the moon's angle for the next frame
          planet.moon.angle += planet.moon.angularSpeed;
        }
      });

      requestAnimationFrame(drawSolarSystem);
    };

    drawSolarSystem();
    return () => {
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
    ></canvas>
  );
}

export default Canvas;
