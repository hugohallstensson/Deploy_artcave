import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm} from "react-hook-form";
import Userfront from "@userfront/react";
import { Navigate, useLocation } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import '../css/retrive.css';

import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.min.js";
import "./random"

import $ from 'jquery';

export default function Retrive() {

  const [imageListSate, setImageListState] = useState([]);
    
const Image = (props) => (

    <tr>
      <td>
        <img src={props.url} width="200"></img>
        <button data-value={props.url} onClick={test}>Open</button>
        <button data-value={props.url} onClick={remove} >Delete</button>
        </td>
        
    </tr>
  );

    const { handleSubmit } = useForm()
    const navigate = useNavigate();

    const test = (e) => {
      window.scrollTo(0, 0);

        // When a post request is sent to the create url, we'll add a new record to the database.
    
        console.log(e.currentTarget.getAttribute("data-value"))

        navigate("/specificImage", {
          state: {
            url: e.currentTarget.getAttribute("data-value"),
          }
        });
        
      }

      const remove = async (e) => {

        // When a post request is sent to the create url, we'll add a new record to the database.
        
        const imageUrlSave = {imageUrl: e.currentTarget.getAttribute("data-value")};
        
      await fetch("https://artcave-react.onrender.com/retrive/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
        body: JSON.stringify(imageUrlSave),
      })
      .catch(error => {
        window.alert(error);
        return;
      });

      var array = imageListSate // make a separate copy of the array
      var index = array.map(e => e.url).indexOf(imageUrlSave.imageUrl)
      if (index !== -1) {
        array.splice(index, 1);
        
        console.log("inne i funktion")
      }
      setImageListState([array])
      NotificationManager.error('Image removed', 'Deleted', 3000);
      //setImageListState([])
    }

    const [images, setImages] = useState([]);
  
      // This function will handle the submission.
      useEffect(() => {
      async function getImages() {
        const response = await fetch(`https://artcave-react.onrender.com/retrive/`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Userfront.tokens.accessToken}`,
          }
        })
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const images = await response.json();

        
        setImages(images);
        setImageListState(images)
        console.log(images)
      }
  
      getImages();


      return; 

      }, [images.length]);

      function imageList() {
        return images.map((image) => {
          return (
            <Image
              url={image.url}
            />
          );
        });
      }
      
      function RequireAuth({ children }) {
        let location = useLocation();
        if (!Userfront.tokens.accessToken) {
          // Redirect to the /login page
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
      
        return children;
      }
      

      function card(image, index) {


        
        return(       
          
          
         

    <div class="col-sm">
  
    
          <div id="card" class="card"  style={{width : '18rem'}} key={index}>
        <img class="card-img-top" src={image.url} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{image.date}</h5>
          <p class="card-text">Prompt: {image.prompt}</p>
          <a id="cardbutton" class="btn btn-primary" data-value={image.url} onClick={test}>Open</a>
          <a  class="btn btn-danger" data-value={image.url} onClick={remove}>Delete</a>

          </div>
          </div>
          
        
      </div>)

      }

      function IfEmpty(){
        console.log("testtttt")

        if(imageListSate.length === 0){
          const message="No saved images to display"
          return <div id="message">
            <h3>
            {message}
            </h3>
              
            </div>
          
        } else{
          return null;
        }
        
        
      }


  return (
    
    <div>
<div id="text">
<h1>
            Saved images
          </h1>
          <h5>
            Open images to inspect and buy them
          </h5>
</div>









      <RequireAuth>
      <div class="container">
      <div class="row">
      
      {imageListSate.map(card)}
      </div>
      </div>
      
      
      <div>
      <IfEmpty/>  
      </div>
        </RequireAuth>

        <NotificationContainer />
        <script src="bootstrap.js"></script>

    </div>

    
    
  );

  

}


