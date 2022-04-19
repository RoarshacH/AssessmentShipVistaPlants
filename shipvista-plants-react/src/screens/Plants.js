import React, { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import { updateItem } from "../utilities/api";
import { isRestingAfterWatering } from "../utilities/helperFunctions";
import PlantCard from "./PlantCard";
import axios from "axios";

const baseUrl = "https://localhost:44310/api/Plant";
const api = axios.create({
  baseURL: baseUrl,
});

var myTimeout;

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setPlants(res.data);
    });
  }, [plants]);

  const handleClick = (id) => {
    const newList = [...plants];
    let plant = newList[id - 1];
    if (isRestingAfterWatering(plant.lastTimeWatered)) {
      alert("Plant is Resting Please Try Again in 30 Seconds!");
    } else {
      newList[id - 1].isWatering = true;
      updateItem(id, newList[id - 1]);
      setPlants(newList);

      myTimeout = setTimeout(() => {
        const temp = [...plants];
        temp[id - 1].isWatering = false;
        temp[id - 1].waterLevel = "High";
        temp[id - 1].lastTimeWatered = new Date();
        updateItem(id, temp[id - 1]);
        setPlants(temp);
      }, 10000);
    }
  };

  function stopTimeoutFunction(id) {
    clearTimeout(myTimeout);
    const temp = [...plants];
    temp[id - 1].isWatering = false;
    updateItem(id, temp[id - 1]);
    setPlants(temp);
  }

  return (
    <CardGroup>
      {plants.map((plant) => (
        <PlantCard plant={plant} handleClick={handleClick} stopTimeoutFunction={stopTimeoutFunction} key={plant.id} />
      ))}
    </CardGroup>
  );
}
