import React from 'react';
import PlanetCard from './components/PlanetCard';
import PlanetRequest from './components/PlanetRequest';
import './App.css';
import './styles/custom.css';

function App() {
  const planets = [
    {
      name: "Меркурій",
      rotation_period: "1408",
      orbital_period: "88",
      diameter: "4879",
      climate: "no atmosphere",
      gravity: "0.38 standard",
      terrain: "rocky",
      surface_water: "0",
      population: "0"
    },
    {
      name: "Венера",
      rotation_period: "5832",
      orbital_period: "225",
      diameter: "12104",
      climate: "hot",
      gravity: "0.904 standard",
      terrain: "rocky",
      surface_water: "0",
      population: "0"
    },
    {
      name: "Земля",
      rotation_period: "24",
      orbital_period: "365",
      diameter: "12742",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "diverse",
      surface_water: "71",
      population: "7800000000"
    },
    {
      name: "Марс",
      rotation_period: "25",
      orbital_period: "687",
      diameter: "6779",
      climate: "arid",
      gravity: "0.376 standard",
      terrain: "rocky",
      surface_water: "0.03",
      population: "0"
    },
    {
      name: "Юпітер",
      rotation_period: "10",
      orbital_period: "4333",
      diameter: "139820",
      climate: "gas giant",
      gravity: "2.528 standard",
      terrain: "gas",
      surface_water: "unknown",
      population: "0"
    },
    {
      name: "Сатурн",
      rotation_period: "11",
      orbital_period: "10759",
      diameter: "116460",
      climate: "gas giant",
      gravity: "1.065 standard",
      terrain: "gas",
      surface_water: "unknown",
      population: "0"
    },
    {
      name: "Уран",
      rotation_period: "17",
      orbital_period: "30685",
      diameter: "50724",
      climate: "ice giant",
      gravity: "0.886 standard",
      terrain: "ice",
      surface_water: "unknown",
      population: "0"
    },
    {
      name: "Нептун",
      rotation_period: "16",
      orbital_period: "60225",
      diameter: "49244",
      climate: "ice giant",
      gravity: "1.14 standard",
      terrain: "ice",
      surface_water: "unknown",
      population: "0"
    }
  ];


  return (
      <div className="container mt-5">
        <PlanetRequest />
        <div className="row">
          {planets.map((planet, index) => (
              <PlanetCard key={index} planet={planet} />
          ))}
        </div>
      </div>
  );
}


export default App;
