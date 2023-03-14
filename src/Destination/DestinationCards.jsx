 
 import { Button } from "react-bootstrap";
import { useState } from "react"
import img from "../assets/forest.jpg"
 import './Destination.css'
 const DestinationCard = (props) => {
    const [details,setDetails]=useState([]);
    return (
        <>
        {props.details.map ( (value, index) => (

            
                <div className="card text-center" key={index} style={{height:450}}>
                    <div className="overflow">
                        <img src={value.img} alt="image 1" className="card-img-top"/>
                    </div>
                    <div className="card-body text-dark">
                            {/* // title only for 8-10  */}
                        <h4 className="card-title">{value.title}</h4>
                            {/* description only of 200-210 words */}
                        <p className="card-text text-secondary">{value.description}</p>
                    <Button variant="none" className="btn btn-outline-primary">Explore </Button>
                    </div>
                </div>
                
        ))}
       
        
        </>
    )
}
export default DestinationCard;