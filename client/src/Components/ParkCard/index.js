import React from "react";
import "./style.css";

function ParkCard() {
  return (
    <div class="card park-card">
      <img src="https://media.gettyimages.com/photos/empty-bench-in-green-park-and-sky-with-sun-light-green-park-outdoor-picture-id1137437560" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Park Name</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit ut recusandae. Fugiat officiis reiciendis incidunt, odit quibusdam qui! Accusamus sit aut quae iusto laborum quasi corporis tenetur, necessitatibus cupiditate?</p>
      </div>
    </div>
  );
}

export default ParkCard;