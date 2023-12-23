import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from 'react-router';
import Userfront from "@userfront/react";
import { Navigate, useLocation } from "react-router-dom";
import bootstrap from 'react-bootstrap/Button';
import * as Scroll from 'react-scroll';
import { NotificationContainer, NotificationManager } from 'react-notifications';


import '../css/create.css';

export default function Image() {

  const [form, setForm] = useState({
    prompt: "",
  });

  const [imageNewUrl, setImage] = useState({
    url: "",
    prompt: "",
  });

  const [genImageState, setGenImageState] = useState("")

  const [loadState, setLoadState] = useState(false)


  const navigate = useNavigate();

  const { handleSubmit } = useForm()



  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }


  function updateImageUrl(value) {
    return setImage((prev) => {
      return { ...prev, ...value };
    });
  }


  // This function will handle the submission.
  async function onSubmit(e) {

    var element = document.getElementById("scroll");

    element.scrollIntoView();
    setLoadState(true)
    e.preventDefault();

    document.querySelector('#image').src = '';
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newImage = { ...form };

    setForm({ prompt: "" });



    const response = await fetch("https://artcave-react.onrender.com/image/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
    })
      .catch(error => console.error("errrrrrrrrrrror"));


    const data = await response.json();
    // console.log(data);

    const imageUrl = data.data;

    console.log(imageUrl)

    updateImageUrl({ url: imageUrl, prompt: newImage })

    document.querySelector('#image').src = imageUrl;
    // setTimeout(1000)


    setTimeout(() => {
      setGenImageState(imageUrl);
    }, 1000);
    setLoadState(false)


  }



  // This function will handle the submission.
  async function onSaveSubmit() {


    // When a post request is sent to the create url, we'll add a new record to the database.
    console.log(Userfront.tokens.accessToken)
    console.log(imageNewUrl.url)

    const imageUrlSave = { imageUrl: imageNewUrl.url, prompt: imageNewUrl.prompt };

    await fetch("https://artcave-react.onrender.com/image/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      body: JSON.stringify(imageUrlSave),
    })
      .catch(error => {
        return;
      });

    console.log("saved")
    NotificationManager.success('Added to collection!', 'Saved', 3000);

  }


  // This function will handle the submission.
  async function onOpenSubmit() {
    window.scrollTo(0, 0);

    // When a post request is sent to the create url, we'll add a new record to the database.

    navigate("/specificImage", {
      state: {
        url: imageNewUrl.url,
      }
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


  function Showbuttontmp() {


    if (imageNewUrl.url != "") {


      return <div className="buttons">
        <button id="button20" type="button" class="btn btn-primary" onClick={handleSubmit(onOpenSubmit)}>Buy</button>
        <button id="button10" type="button" class="btn btn-primary" onClick={handleSubmit(onSaveSubmit)} >Save</button>

      </div>;
    }


    return null;
  }

  useEffect(() => {

    console.log("scroll")
    var element = document.getElementById("scroll");

    element.scrollIntoView();

    // var Scroll = require('react-scroll');
    // var scroll = Scroll.animateScroll;

    // scroll.scrollToBottom();

    // const element = document.getElementById('image');
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  }, [genImageState]);



  function Loader() {

    if (loadState) {
      return (
        <div class="loader">
          <div id="loader" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

      )
    } else {
      return null;
    }



  }


  // This following section will display the form that takes the input from the user.
  return (
    <div id="mainbig">

      <RequireAuth>


        <div class="test">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./banner11.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">

                </div>
              </div>

              <div class="carousel-item">
                <img src="./banner22.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">

                </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </RequireAuth>

      <h3 class="titel" >Create a painting with AI</h3>
      <p class="smallTitel" >Enter a text describing how you want it to look</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="prompt"
            value={form.prompt}
            onChange={(e) => updateForm({ prompt: e.target.value })}
          />
        </div>
        <div className="form-group2">
          <input
            id="btn"
            type="submit"
            value="Generate image"
            className="btn btn-primary btn-lg"
          />

        </div>


      </form>
      <Loader />



      <section id="bilden" class="image">
        <div class="image-container">
          <img class="yesimage" src="" alt="" id="image" width={500} />
        </div>

        <Showbuttontmp />



      </section>
      <NotificationContainer />

      <div id="scroll">

      </div>


    </div>

  );

}

