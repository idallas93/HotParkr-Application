import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function ParkCard({ name, groundType, hasPoopBags, location, rating, id }) {

  const link = `/park/${id}`

  return (
    <>
    <Link to={link}>
      <div className="card park-card">
        <h3>{id + 1}</h3>

        <img
          src="https://media.gettyimages.com/photos/empty-bench-in-green-park-and-sky-with-sun-light-green-park-outdoor-picture-id1137437560"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            suscipit ut recusandae. Fugiat officiis reiciendis incidunt, odit
            quibusdam qui! Accusamus sit aut quae iusto laborum quasi corporis
            tenetur, necessitatibus cupiditate?
          </p>
          <p>
            <b>Ground Type: </b>
            {groundType}
          </p>
          <p>
            <b>Poop Bags?: </b>
            {hasPoopBags ? "Yes" : "No"}
          </p>
          <p>
            <b>Rating: </b>
            {rating}
          </p>
          <p>
            <b>Address: </b>
            {location.address}
          </p>
        </div>
      </div>
    </Link>
    </>
  );
}

export default ParkCard;
