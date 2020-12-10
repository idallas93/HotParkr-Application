import React from "react"
import { useGlobalContext } from "../../context/GlobalContext";
import CardGroup from 'react-bootstrap/CardGroup';
import ParkCard from "../ParkCard";



const CardContainer = () => {

  const [state, dispatch] = useGlobalContext();
  

  return (
      <div className="card-container">
      <CardGroup>
      <ParkCard />
      <ParkCard />
      <ParkCard />
      <ParkCard />
      </CardGroup>
    </div> 
  )
}

export default CardContainer
