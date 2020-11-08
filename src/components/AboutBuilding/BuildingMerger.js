import React, {useState} from "react";
import BuildingBenchmark from "./components/BuildingBenchmark";
import BuildingView from "./components/BuildingView";

//const {buildingBenchmark, setBuildingBenchmark} = useState({});
//const {buildingGeometry, setBuildingGeometry} = useState({});


export default function BuildingMerger () {
return (
  <div>
    <BuildingBenchmark />
    <BuildingView />
  </div>
);

}
