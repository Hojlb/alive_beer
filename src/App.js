import React from 'react';
import './style/App.css';
import TableGrounds from "./components/TableGrounds/TableGrounds";
import BuildingMerger from "./components/AboutBuilding/BuildingMerger"

function App() {
  return (
    <div className="App">
      <TableGrounds />
      <BuildingMerger />
    </div>
  );
}

export default App;
