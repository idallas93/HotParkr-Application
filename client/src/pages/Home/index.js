import React from "react";
import "./style.css";
import LoginForm from "../../Components/LoginForm";
import { useGlobalContext } from "../../context/GlobalContext";
import ParkCard from "../../Components/ParkCard/";
import Signup from "../../pages/Signup";
import { Link } from "react-router-dom";
function Home() {
  const [state, dispatch] = useGlobalContext();

  return (
    <main>
      Home
      <div className="card-container">
        <ParkCard />
        <ParkCard />
        <ParkCard />
        <ParkCard />
      </div>
    </main>
  );
}

export default Home;
