import React from "react";

import Taj from "../assets/taj.jpg";
import Varanasi from "../assets/varanasi.jpg";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <section className="destination">
      <div className="head">
        <h1>Popular Destination</h1>
        <p>Bharat-Yatra will give you a real view about India.</p>
      </div>

      <DestinationData
        className="first-des"
        heading="Taj Mahal, Agra"
        text="Perhaps India's most recognizable building, the Taj Mahal is also
            the world's most famous testimony to the power of love. Named after
            Mumtaz Mahal, the favorite wife of Emperor Shah Jahan, this most
            beautiful of mausoleums was begun upon her death in 1631 and took
            20,000 workmen until 1648 to complete. Incorporating many elements
            of Islamic design including arches, minarets, an onion-shaped dome,
            and black calligraphy inlaid around the entrance, the Taj Mahal is
            largely constructed of white marble. Adding to its splendor are
            delicate inlaid floral patterns and precious and semi-precious
            stones such as jade, lapis lazuli, diamonds, and mother of pearl.
          "
        img={Taj}
      />

      <DestinationData
        className="first-des-reverse"
        heading="The Holy City of Varanasi"
        text="Dating back to the 8th century BC, Varanasi is one of the oldest still inhabited cities in the world. A major pilgrimage center for Hindus, this holy city has long been associated with the mighty Ganges River, one of the faith's most important religious symbols.
        Varanasi offers many reasons to visit, not least of them the chance to explore the Old Quarter adjacent to the Ganges where you'll find the Kashi Vishwanath Temple, built in 1780. The New Vishwanath Temple with its seven separate temples is also of interest.Bathing in the Ganges is of great importance to Hindus, and numerous locations known as ghats feature stairways leading to the water where the faithful bathe before prayers. The largest are Dasashvamedh Ghat and Assi Ghat. The latter, at the confluence of the Ganges and Asi rivers, is considered particularly holy"
        img={Varanasi}
      />
    </section>
  );
}

export default Destination;
