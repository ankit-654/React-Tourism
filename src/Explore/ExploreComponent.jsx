// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './ExploreComponent.css'
// import {SiChinaeasternairlines,SiCodeproject} from "react-icons/si"
// export default function Explore() {
//   return (
//       <>
//       <div style={{textAlign:"center",padding:"5px"}}>
//       <h2  className="heading1"><SiCodeproject/> enjoy your vacation with us  </h2>
//        {/* <h3><SiChinaeasternairlines/></h3> */}
//       </div>
//       <div className='card-box'>
//        <div className='card-resp-center'>
//        <div className='card-item'>
//         <Card className='shadow'>
//       <CardMedia
//       className='card-img-hover'
//         sx={{ height: 170}}
//         image='/assets/hill.jpg'
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//         <b>Mountains</b>
//         {/* <hr/> */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Your bags are packed. Your out-of-office email reply is all set.
          
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button>Explore</Button>
//       </CardActions>
//     </Card>
//     </div>
//     </div>
//     <div className='card-resp-center'>
//        <div className='card-item'>
//       <Card className='shadow'>
//       <CardMedia
//          className='card-img-hover'
//         sx={{ height: 170 }}
//         image='/assets/sea-and-beach.jpg'
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//         <b>Sea and Beach</b>
//         {/* <hr/> */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Your bags are packed. Your out-of-office email reply is all set.
          
//         </Typography>
//       </CardContent>
//       <CardActions>
//        <Button>Explore</Button>
//       </CardActions>
//     </Card>
//     </div>
//     </div>
//     <div className='card-resp-center'>
//        <div className='card-item'>
//         <Card className='shadow'>
//       <CardMedia
//          className='card-img-hover'
//         sx={{ height: 170 }}
//         image='/assets/forest.jpg'
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//         <b>Island</b>
//         {/* <hr/> */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Your bags are packed. Your out-of-office email reply is all set.
          
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button>Explore</Button>
//       </CardActions>
//     </Card>
//     </div>
//     </div>
//     <div className='card-resp-center'>
//        <div className='card-item'>
//         <Card className='shadow'>
//       <CardMedia
//        className='card-img-hover'
//         sx={{ height: 170 }}
//         image='/assets/forts.jpg'
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//         <b>Forts and Palace</b>
//         {/* <hr/> */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Your bags are packed. Your out-of-office email reply is all set.
          
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button>Explore</Button>
//       </CardActions>
//     </Card>
//     </div>
//     </div>
//             </div>
//     </>
//   );
// }


import { Button } from "react-bootstrap"
import './ExploreComponent.css'
 const ExploreComponent =(props) => {

return(
        <>
        {props.details.map((value,index)=>(
           <div className="resp-container" key={index}>
           <div className="main-container">
            <div className="thecard">
                <div className="front-side">
                <h2>{value.front_data}</h2>
                <Button className="btn-success">View</Button>
                </div>
                <div className="back-side"><h6>{value.back_data}</h6></div>
            </div>
           </div> 
           </div>
           ))}
           ;
        </>
)
}
export default ExploreComponent