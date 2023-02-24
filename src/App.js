import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { MainComponent } from "./MainComponent";
import Login from "./Login/Login";
import ProfileComponent from "./Profile/ProfileComponent";
export default function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/tourism" element={<MainComponent/>}>
            <Route path="profile" element={<ProfileComponent/>}></Route>
            {/* <Route path="profile" element /> */}
            {/* <Route path="profile" element /> */}
          </Route>

        </Routes>
      </Router>
    </>
  )
}