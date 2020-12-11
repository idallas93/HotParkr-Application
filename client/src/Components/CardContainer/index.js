import React from "react"
import { useGlobalContext } from "../../context/GlobalContext";
import CardGroup from 'react-bootstrap/CardGroup';
import ParkCard from "../ParkCard";
import "./style.css";




const CardContainer = () => {

  const [state, dispatch] = useGlobalContext();

  // using parks info from global context, render the proper parks
  const parks = state.parks
  

  return (
      <div className="card-container">
      <CardGroup>
      {
        parks.map(park => {
          return<ParkCard {...park} />
        })
      }
      </CardGroup>
     
    </div> 
  )
}

export default CardContainer
