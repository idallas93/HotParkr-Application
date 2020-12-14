import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalContext } from "../../context/GlobalContext";

function ParkCard({ name, groundType, hasPoopBags, location, rating, id }) {

  let [cardData, setCardData] = useState({nonexistent: true})

  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    // check for park in the database 
    axios
      .post(
        "/api/parkInfo",
        { address: location.address },
        {
          headers: {
            Authorization: `Bearer ${state.apiToken}`,
          },
        }
      )
      .then(({data}) => {
        if (data) {
          console.log(data)
          // if data comes in, render it on the card
          setCardData({
            groundType: data.groundType,
            hasPoopBags: data.hasPoopBags,
            rating: data.rating
          })
          
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const link = `/park/${id}`

  return (
    <>
    <Link to={link} className='col-md-3'>
      <div className="card park-card">
        <h3>{id + 1}</h3>

        <img
          src="https://media.gettyimages.com/photos/empty-bench-in-green-park-and-sky-with-sun-light-green-park-outdoor-picture-id1137437560"
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <b>Address: </b>
            {location.address}
          </p>
          {/* Don't show specific info unless park exists in the parks collection */}
          {
          cardData.nonexistent ?
          ""
          
          :
          <>
            <p>
            <b>Ground Type: </b>
            {cardData.groundType}
          </p>
          <p>
            <b>Poop Bags?: </b>
            {cardData.hasPoopBags ? "Yes" : "No"}
          </p>
          <p>
            <b>Rating: </b>
            {cardData.rating}
          </p>
          </>
          }
          
          
        </div>
      </div>
    </Link>
    </>
  );
}

export default ParkCard;
