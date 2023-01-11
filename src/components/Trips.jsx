import React from "react";
import TripData from "./TripData";
import Periyar from "../assets/periyar.jpg";
import Beaches from "../assets/beaches.jpg";
import Jaisalmer from "../assets/jaisalmer.jpg";

function Trips() {
  return (
    <section className="recent-trips">
      <div className="head">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using goole maps.</p>
      </div>

      <div className="trip-cards">
        <TripData
          image={Periyar}
          heading="Periyar National Park"
          text="One of South India's most popular tourist attractions, Periyar National Park and Wildlife Sanctuary is centered around a lake built by British engineers in 1895 for irrigation and to provide water to the city of Madurai."
        />
        <TripData
          image={Beaches}
          heading="Goa - Beaches"
          text="One of South India's most popular tourist attractions, Periyar National Park and Wildlife Sanctuary is centered around a lake built by British engineers in 1895 for irrigation and to provide water to the city of Madurai."
        />
        <TripData
          image={Jaisalmer}
          heading="Jaisalmer: The Golden City"
          text="One of South India's most popular tourist attractions, Periyar National Park and Wildlife Sanctuary is centered around a lake built by British engineers in 1895 for irrigation and to provide water to the city of Madurai."
        />
      </div>
    </section>
  );
}

export default Trips;
