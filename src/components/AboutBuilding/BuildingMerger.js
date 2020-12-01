import React from "react";
import BuildingBenchmark from "./components/BuildingBenchmark";
import BuildingView from "./components/BuildingView";
import "../../style/BuildingOptions.css";

//const {buildingBenchmark, setBuildingBenchmark} = useState({});
//const {buildingGeometry, setBuildingGeometry} = useState({});


const BuildingMerger = () => {
return (
  <section className='build-options-main card'>
    <BuildingBenchmark />
    <BuildingView />
  </section>
);
};

export default BuildingMerger;