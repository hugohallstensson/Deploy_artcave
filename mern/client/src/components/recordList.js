import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/welcome.css';

export default function Record() {


  // This following section will display the table with the records of individuals.
  return (
    <div id="mainbig">

      <div class="testMain">

        <div class="test1">
          <div class="green">
            <h1 class="title" >Welcome to Artcave</h1>
            <h5 class="breading">
              Experience the art of tomorrow, today

            </h5>
          </div>
        </div>

        <div class="test2">
          <div class="blue">
            <img src="./Logo-removebg-preview.png" width={250}></img>
          </div>
        </div>

      </div>

      <div>


      </div>


      <img class="mainBild" src="./welcome24.png"  ></img>
      <div class="center">



        {/* <h4 class="breading">
       Fully create your own painting
      </h4> */}

        <a id="btn24" href="/Image" class="btn btn-primary btn-lg" role="button">Create a painting</a>
      </div>
    </div>
  );
}
