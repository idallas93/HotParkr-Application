import React, { useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";


function Park({}) {

    const ratingRef = useRef()
    const poopBagRef = useRef()
    const groundTypeRef = useRef()
    const reviewRef = useRef()

    useEffect(() => {
        // if park exists in park collection, pull its info
        // if park doesn't exist in the collection show default info and enable user to modify
    } , [])

    const { id } = useParams();

    const [state, dispatch] = useGlobalContext();

    const sendReview = () => {
        const newReview = {
            address: state.parks[id].location.address,
            rating: ratingRef.current.value,
            hasPoopBags: poopBagRef.current.value,
            groundType: groundTypeRef.current.value,
            review: reviewRef.current.value
        }
        console.log(newReview)
        alert("Review Sent!")
    }

    return (
        <div>
            {
            state.parks.length 
                ?
            <>  
                <div className="park-info">
                    <h1>{state.parks[id].name}</h1>
                    <h2>Address: {state.parks[id].location.address}</h2>
                    <h2>Rating: {state.parks[id].rating} / 5</h2>
                    <h2>Ground Type: {state.parks[id].groundType}</h2>
                    <h2>Are There poop bags: {state.parks[id].hasPoopBags ? "Yes" : "No"}</h2>
                </div>
                <div className="user-info">
                    <form>
                        <label htmlFor="rating">Rate the park!&nbsp;</label>
                        <select ref={ratingRef} name="rating">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={1}>5</option>
                        </select>
                        <label htmlFor="hasPoopBags">Are there poop bags?</label>
                        <select ref={poopBagRef} name="hasPoopBags">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        <label htmlFor="groundType">What is the ground type?</label>
                        <select ref={groundTypeRef} name="groundType">
                            <option value="Grass">Grass</option>
                            <option value="Dirt">Dirt</option>
                            <option value="Turf">Turf</option>
                        </select>
                        <label htmlFor="review">Review:</label>
                        <textarea ref={reviewRef} name="review"></textarea>
                        <button onClick={(e) => {
                            e.preventDefault()
                            sendReview()
                        }}>Send</button>
                    </form>
                </div>
            </> 
                :
                <h1>Park Not Found!</h1>
            }
            
        </div>
    )
}

export default Park