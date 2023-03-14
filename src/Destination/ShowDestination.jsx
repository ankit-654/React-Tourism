import CardData from "./CardData";
import DestinationCard from "./DestinationCards";
import './Destination.css'
import { SiCodeproject } from "react-icons/si";
 const Destination = () => {
return(
    <>
     <h2  className="heading1"><SiCodeproject/> enjoy your vacation with us  </h2>
        <div className="card-resp">
        <DestinationCard details={CardData}/>
        </div>
      </>
)
}
export default Destination;