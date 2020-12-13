import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import CardGroup from "react-bootstrap/CardGroup";
import ParkCard from "../ParkCard";
import "./style.css";

const CardContainer = () => {
  const [state, dispatch] = useGlobalContext();

  // using parks info from global context, render the proper parks
  const parks = state.parks;

  return (
    <div className="card-container">
      <CardGroup>
        {parks.length > 0
          ? parks.map((park, id) => {
              return <ParkCard {...park} id={id} />;
            })
          : "There are no dog parks near you :("}
      </CardGroup>
    </div>
  );
};

export default CardContainer;
