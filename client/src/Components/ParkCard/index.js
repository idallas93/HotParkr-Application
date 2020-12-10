import React from "react";
import "./style.css";
import CardGroup from 'react-bootstrap/Button';


function ParkCard() {
  return (
    
    <div className="card park-card">
      <img
        src="https://media.gettyimages.com/photos/empty-bench-in-green-park-and-sky-with-sun-light-green-park-outdoor-picture-id1137437560"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Park Name</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          suscipit ut recusandae. Fugiat officiis reiciendis incidunt, odit
          quibusdam qui! Accusamus sit aut quae iusto laborum quasi corporis
          tenetur, necessitatibus cupiditate?
        </p>
      </div>
    </div>
  );
}

export default ParkCard;
