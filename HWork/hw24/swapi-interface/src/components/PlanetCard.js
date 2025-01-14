import React from 'react';

function PlanetCard({ planet }) {
  return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <ul>
              <li>Rotation Period: {planet.rotation_period} hours</li>
              <li>Orbital Period: {planet.orbital_period} days</li>
              <li>Diameter: {planet.diameter} km</li>
              <li>Climate: {planet.climate}</li>
              <li>Gravity: {planet.gravity}</li>
              <li>Terrain: {planet.terrain}</li>
              <li>Surface Water: {planet.surface_water}%</li>
              <li>Population: {planet.population}</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default PlanetCard;
