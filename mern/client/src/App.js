import React, {useEffect} from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Bottom from "./components/bottom";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import CreateImage from "./components/Image";
import Retrive from "./components/Retrive";
import SpecificImage from "./components/specificImage";
import Login from "./components/login";
import Register from "./components/register";
import Shoppingcart from "./components/shoppingcart";
import Succes from "./components/succes";
import {useState} from 'react';
import Userfront from "@userfront/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap';

Userfront.init("xbpg9gdn");

const PasswordResetForm = Userfront.build({
  toolId: "ramndbl"
});

const LogoutButton = Userfront.build({
  toolId: "oralnob"
});

const App = () => {



  // const [user, setUserLogin] = useState(false)


  // const [cartQuant, setCartQuant] = useState("1");
//get shoppingcart
// useEffect(async () => {

  
  
        
  
//     const response = await fetch(`http://localhost:5000/shoppingcart/`,{
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${Userfront.tokens.accessToken}`,
//       }
//     })

//     if (!response.ok) {
//       const message = `An error occured: ${response.statusText}`;
//       return;
//     }

//     const tmpImages = await response.json();

    
//     setCartQuant(tmpImages.length);
//     console.log("längd: " + tmpImages.length)

     
  
// });




  useEffect(async () => {
    console.log("hahahahaah")
    return <Navbar />
  })


return (
  <div>

    <Navbar  />
    
      <div>
 

        <Routes>
        <Route exact path="/" element={<RecordList />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
      <Route path="/Image" element={<CreateImage />} />
      <Route path="/retrive" element={<Retrive />} />
      <Route path="/success" element={<Succes />}></Route>
      <Route path="/shoppingcart" element={<Shoppingcart/>} />
      <Route path="/specificImage" element={<SpecificImage />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login />}>
        
        

            
          </Route>
          <Route path="/reset" element={<PasswordReset />}>
            
          </Route>
          {/* <Route path="/Reg" element={<div><Reg /><LogoutButton/></div>}>
            
          </Route> */}
        </Routes>
      </div>
    {/* </Router> */}
    {/* <Bottom  /> */}
  </div>
);
};


// return (
//   <div>
//     <Navbar element user={user}/>
//     <div style={{ margin: 20 }}>
//     <Routes>
//       <Route exact path="/" element={<RecordList />} />
//       <Route path="/edit/:id" element={<Edit />} />
//       <Route path="/create" element={<Create />} />
//       <Route path="/Image" element={<CreateImage />} />
//       <Route path="/retrive" element={<Retrive />} />
//       <Route path="/specificImage" element={<SpecificImage />} />
//       <Route path="/login" element={<Login user={user}/>} />
//       <Route path="/register" element={<Register user={user}/>} />
//     </Routes>
//     </div>
//   </div>
// );
// };



function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

export default App;
