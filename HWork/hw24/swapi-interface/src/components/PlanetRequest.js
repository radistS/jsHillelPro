import React from 'react';

function PlanetRequest() {
  return (
      <div className="container">
        <h2 className="mb-3">Request Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="inputURL" className="form-label">URL</label>
            <input type="text" className="form-control" id="inputURL"
                   placeholder="https://swapi.dev/api/planet/1/"/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputType" className="form-label">Request
              Type</label>
            <select className="form-select" id="inputType">
              <option selected>Choose...</option>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
}

export default PlanetRequest;
