import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import ParkCard from "../ParkCard";
import "./style.css";

// Hard Coded Images:
const images = [
  "https://media.gettyimages.com/photos/empty-bench-in-green-park-and-sky-with-sun-light-green-park-outdoor-picture-id1137437560"
]

const CardContainer = () => {
  const [state, dispatch] = useGlobalContext();

  // using parks info from global context, render the proper parks
  const parks = state.parks;

  return (
    <div className="row">
        {parks.length > 0
          ? parks.map((park, id) => {
              const image = images[id % images.length]
              return <ParkCard imageLink={image} {...park} id={id} />;
            })
          : <p className="errorMessage">There are no dog parks within your defined radius, please make radius larger </p> }
    </div>
  );
};

export default CardContainer;
