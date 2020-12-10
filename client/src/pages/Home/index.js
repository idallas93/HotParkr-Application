import React from "react";
import "./style.css";
import LoginForm from "../../Components/LoginForm";
import { useGlobalContext } from "../../context/GlobalContext";
import ParkCard from "../../Components/ParkCard/";
import LocationSearchForm from "../../Components/LocationSearchForm";
import HomeJumbotron from "../../Components/HomeJumbotron";
import Signup from "../../pages/Signup";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
import Map from "../../Components/Map";



function Home() {
  const [state, dispatch] = useGlobalContext();

  return (
    <main>
      <div>
        <HomeJumbotron/>
        <Map/>
      </div>
      <div>
        <LocationSearchForm/>
      </div>
      <h2>Dog Parks Near You</h2>
      <div className="card-container">
        <CardGroup>
        <ParkCard />
        <ParkCard />
        <ParkCard />
        <ParkCard />
        </CardGroup>
      </div>
    </main>
  );
}

export default Home;
