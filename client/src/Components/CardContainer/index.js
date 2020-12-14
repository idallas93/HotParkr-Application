import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import ParkCard from "../ParkCard";
import "./style.css";

const CardContainer = () => {
  const [state, dispatch] = useGlobalContext();

  // using parks info from global context, render the proper parks
  const parks = state.parks;

  return (
    <div className="row">
        {parks.length > 0
          ? parks.map((park, id) => {
              return <ParkCard className='col-md-3' {...park} id={id} />;
            })
          : "There are no dog parks near you :("}
    </div>
  );
};

export default CardContainer;
