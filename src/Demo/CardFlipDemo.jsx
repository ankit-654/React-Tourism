 import { Button } from "react-bootstrap"
import "./CardFlip.css"
 export const CardFlip =() => {

return(
        <>
           <div className="resp-container">
           <div className="main-container">
            <div className="thecard">
                <div className="front-side">
                <h2>Hey get the details.</h2>
                <Button className="btn-success">View</Button>
                </div>
                <div className="back-side"><h6>Enjoy your exotic holidays with our 
                tour plan and get the vacation offers and much more .</h6></div>
            </div>
           </div> 
           </div>
        </>
)
}