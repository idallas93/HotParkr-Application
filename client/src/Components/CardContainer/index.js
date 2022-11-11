import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import ParkCard from "../ParkCard";
import "./style.css";

// Hard Coded Images:
const images = [
  "https://media.gettyimages.com/photos/empty-bench-in-green-park-and-sky-with-sun-light-green-park-outdoor-picture-id1137437560",
  "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iANak7ZoQfYs/v0/1000x-1.jpg",
  "https://www.lubrisyn.com/wp-content/uploads/2017/08/open-dog-park-1024x471.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2XDrnoGJLIZOs7s6Ouu2SF3kA-F9MKneFA&usqp=CAU",
  "https://www.sherwoodoregon.gov/sites/default/files/styles/gallery500/public/imageattachments/parksrec/page/5432/20160426_111948-_david_gilmore.jpg?itok=frmtakcM",
  "https://www.decaturga.com/sites/default/files/styles/full_node_primary_extra_wide/public/imageattachments/parksrec/page/6271/decatur_dog_parks.jpg?itok=zU8SetWb",
  "https://missionbayparks.com/wp-content/uploads/2019/07/MBP_Wide_ChannelDogPk_1024x768.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=http%3A%2F%2FtimeInc.brightcove.com.edgesuite.net%2Frtmp_uds%2F1660653193%2F201902%2F3037%2F1660653193_6008581268001_6008579043001-th.jpg%3FpubId%3D1660653193%26videoId%3D6008579043001",
  "https://i.pinimg.com/600x315/65/ba/c7/65bac763f84bf565f0970920a11ccb9e.jpg"
]

const CardContainer = () => {
  const [state, dispatch] = useGlobalContext();

  // using parks info from global context, render the proper parks
  const parks = state.parks;

  return (
    <div className="row">
        {parks.length > 0
          ? parks.map((park, id) => {
              const image = images[id % images.length]
              return <ParkCard imageLink={image} {...park} id={id} />;
            })
          : <p className="errorMessage">Aw woof, there are no dog parks within your defined radius, please make radius larger! </p> }
    </div>
  );
};

export default CardContainer;
