import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { MainComponent } from "./MainComponent";
import Login from "./Login/Login";
import Explore from "./Explore/ExploreComponent";
import Destination from "./Destination/ShowDestination";
export default function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/tourism" element={<MainComponent/>}>
               <Route path="explore" element={<Explore/>}/>
               <Route path="destiantion" element={<Destination/>}  />
          </Route>

        </Routes>
      </Router>
    </>
  )
}