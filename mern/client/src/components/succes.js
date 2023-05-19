import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm} from "react-hook-form";
import { Link } from 'react-router';
import Userfront from "@userfront/react";
import { Navigate, useLocation } from "react-router-dom";
import bootstrap from 'react-bootstrap/Button';
import * as Scroll from 'react-scroll';
import {NotificationContainer, NotificationManager} from 'react-notifications';



export default function Image() {

  async function regPurchase() {

    const response = await fetch(`https://artcave-react.onrender.com/shoppingcart/`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`,
      }
    }).catch(error => console.error(error));

    if (!response.ok) {
      const message = `An error occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const tmpImages = await response.json();

    console.log("längd: " + tmpImages.length)
    
    if(!(tmpImages.length===0)){
      await fetch("https://artcave-react.onrender.com/purchase/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
        body: JSON.stringify(tmpImages),
      })
      .catch(error => {
        return;
      });
    } else{
      return null;
    }



    emptySc();
    }

    

  async function emptySc() {


  await fetch("https://artcave-react.onrender.com/shoppingcart/empty", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Userfront.tokens.accessToken}`,
    }
    }).catch(error => console.error(error));

  }
  
  regPurchase();

 
  
  return (
    <div id="success">
        <h1>
            Köp Lyckades!
        </h1>
        <h4>
            Leverans kommer ske inom 3-5 dagar
        </h4>
        <img id="logosuc" src="./Logo-removebg-preview.png"></img>
    </div>
   
  );

}

