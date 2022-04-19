import React from "react";
import { Button, Card } from "react-bootstrap";
import { NeedWatering, lastWaterdTime } from "../utilities/helperFunctions";

export default function PlantCard({ plant, handleClick, stopTimeoutFunction }) {
  return (
    <Card style={{ width: "15rem", margin: "4rem", border: "1px solid black", padding: "2rem" }} bg={"primary"}>
      <Card.Body style={{ justifyContent: "center", flexDirection: "column" }}>
        <Card.Title>
          Plant Name : {plant.plantName} <br /> {NeedWatering(plant.lastTimeWatered) ? "" : "Alert Water Low!!"}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Water Level : {plant.isWatering ? "Filling With Watter" : plant.waterLevel}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last Watered : {lastWaterdTime(plant.lastTimeWatered)} </small> <br />
        {plant.isWatering ? <Button onClick={() => stopTimeoutFunction(plant.id)}>Watering the Plant Stop?</Button> : <Button onClick={() => handleClick(plant.id)}>Water Plant</Button>}
        <br />
      </Card.Footer>
    </Card>
  );
}
