import React, {useEffect} from "react";
import Parse from 'parse/dist/parse.min.js';

// We import bootstrap to make our application look better.


// We import NavLink to utilize the react router.

import Userfront from "@userfront/react";

import { useState, useContext } from 'react';
/* Option 2: Import via CSS */
import "bootstrap-icons/font/bootstrap-icons.css";

import { useNavigate } from "react-router";
import '../css/navbar.css';




// Here, we display our Navbar
export default function Navbar() {


 
// // const [user, setUserLogin] = useState(false)
const [cartQuant, setCartQuant] = useState(0);


// //get shoppingcart
useEffect(async () => {

  

        
  
    const response = await fetch(`https://artcave-react.onrender.com/shoppingcart/`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`,
      }
    })

    if (!response.ok) {
      const message = `An error occured: ${response.statusText}`;
      return;
    }

    const tmpImages = await response.json();

    
    setCartQuant(tmpImages.length);
    console.log("längd: " + tmpImages.length)

     
  
});



  Userfront.init("xbpg9gdn");

  

  const LogoutButton = Userfront.build({
    toolId: "oralnob"
  });

  function Bubble(){
    if (!cartQuant==0){

      return <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {cartQuant}
      <span class="visually-hidden">unread messages</span>
      </span>
    } else{
      return null;
    }
  }

  function Greeting() {
console.log(Userfront.user)
    if (Userfront.user.userId) {

      return <div class="big"> 
<a id="sc" href="/shoppingcart" class="nav-link">
      <button type="button" class="btn btn-primary position-relative"  >
      <i class="bi bi-cart-fill"></i>
      <Bubble/>

</button>
      </a>
      <div id="logout">
      <LogoutButton />
      </div>
      
      </div>
    }
    return null;
  }

  function GreetingOther() {
    console.log(Userfront.user)
        if (!Userfront.user.userId) {
          return <div>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/Register">
                Register
              </NavLink>
            </li>
          </ul>
        </div> */}


        <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav">
            <li id="hehe2" class="nav-item"><a href="/Login" class="nav-link">Login</a></li>
            <li id="hehe2" class="nav-item"><a href="/Register" class="nav-link">Register</a></li>
        </ul>
    </div>
        
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Register">
                Register
              </NavLink>
            </li>
          </ul>
        </div> */}
        </div>
        }
        return null;
      }
      


  return (
    <div>
    <nav class="navbar navbar-light bg-light navbar-expand-md navbar-fixed-top">
      
    <a id="logo" href="/" class="navbar-brand">
    <img src="/Logonav-removebg-preview (2).png" width={150}/>
    </a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav">
            <li id="hehe" class="nav-item"><a href="/Image" class="nav-link">Create</a></li>
            <li id="hehe" class="nav-item"><a href="/Retrive" class="nav-link">Collection</a></li>


            

            
            
        </ul>
    </div>

    <div id="logoutbutton">
    <GreetingOther />
    <Greeting/>
    </div>
    
        
</nav>



</div>

   
  );
}
