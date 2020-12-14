import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";


function Park({}) {

    useEffect(() => {
        // if park exists in park collection, pull its info
        // if park doesn't exist in the collection show default info and enable user to modify
    } , [])

    const { id } = useParams();

    const [state, dispatch] = useGlobalContext();

    return (
        <div>
            {
            state.parks.length ?

            <>
                <h1>{state.parks[id].name}</h1>
                <h2>Address: {state.parks[id].location.address}</h2>
                <h2>Rating: {state.parks[id].rating} / 5</h2>
                <h2>Ground Type: {state.parks[id].groundType}</h2>
                <h2>Are There poop bags: {state.parks[id].hasPoopBags ? "Yes" : "No"}</h2>
            </> :
            <h1>Park Not Found!</h1>
            }
            
        </div>
    )
}

export default Park