import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Userfront from "@userfront/react";
import { QuantityPicker } from 'react-qty-picker';
import Select from 'react-select'
import { NotificationContainer, NotificationManager } from 'react-notifications';


import '../css/product.css';



// get userId

export default function Image() {




  const location = useLocation();

  const { handleSubmit } = useForm()


  const [imageQuant, setImageQuant] = useState(0);



  const [imageCol, setImageCol] = useState({ label: "Black", value: "Black" });

  const [imageSize, setImageSize] = useState({ value: '50x50', label: '50x50' });

  const [price, setPrice] = useState(100);

  const [Enter, setEnter] = useState(true);

  const [priceId, setPriceId] = useState(100);

  const [width, setWidth] = useState(100);

  const optionsCol = [
    { value: 'White', label: 'White' },
    { value: 'Black', label: 'Black' },
  ]

  const optionsSize = [
    { value: '20x20', label: '20x20' },
    { value: '30x30', label: '30x30' },
    { value: '40x40', label: '40x40' },
    { value: '50x50', label: '50x50' },
  ]



  // function updateImageQuant(value) {
  //   console.log(value)
  //   return setImageQuant((prev) => {
  //     return { ...prev, ...value };
  //   });
  // }




  //if button pressed
  async function onSaveSubmit() {


    // When a post request is sent to the create url, we'll add a new record to the database.

    const imageUrlSave = { imageUrl: location.state.url, quant: imageQuant, col: imageCol.value, size: imageSize.value, price: price, priceId: priceId };





    await fetch("http://localhost:5000/shoppingcart/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      body: JSON.stringify(imageUrlSave),
    }).catch(error => console.error(error));

    NotificationManager.success('Added to cart!', 'Added', 3000);
    console.log("saved")

  }
  // const [imageNewUrl, setImage] = useState({
  //     url: "",
  //   });

  //   function updateImageUrl(value) {
  //     return setImage((prev) => {
  //       return { ...prev, ...value };
  //     });
  //   }

  //updateImageUrl(location.state.url);


  const getPickerValue = (value) => {
    console.log(value) // Here you can get the value of the Quantity picker
    //updateQuantity(value)
    //updateImageQuant(value)

    setImageQuant(value)

    //setPriceFunc()

  }

  const setUserColChoice = (value) => {
    console.log(value) // Here you can get the value of the Quantity picker
    //updateQuantity(value)
    //updateImageQuant(value)
    setImageCol(value)

  }

  const setUserSizeChoice = (value) => {
    console.log(value) // Here you can get the value of the Quantity picker
    //updateQuantity(value)
    //updateImageQuant(value)

    setImageSize(value)

  }

  useEffect(() => {
    console.log(imageSize.value)

    if (imageSize.value === '20x20') {

      setPrice(imageQuant * 599);
      setPriceId("price_1N1z5lCnJhjWx3styOcjT7G6");

    } else if (imageSize.value === "30x30") {

      setPrice(imageQuant * 699);
      setPriceId("price_1N1z68CnJhjWx3st7G3ZH9bv");

    } else if (imageSize.value == "40x40") {

      setPrice(imageQuant * 999);
      setPriceId("price_1N1z6VCnJhjWx3stMOZXOaUy");

    } else if (imageSize.value == "50x50") {

      setPrice(imageQuant * 1299);
      setPriceId("price_1N1z6mCnJhjWx3stDKdp4ASr");

    } else {
      setPrice(0); // This is be executed when the state changes
    }




  }, [imageQuant, imageSize]);

  //  const setPriceFunc = () =>{

  //   console.log("nuuuu")
  //   console.log(price)
  //   console.log(imageQuant)


  //     setPrice(imageQuant*100)


  //   console.log(price)


  //  }





  useEffect(() => {
    if (imageSize.value === '20x20') {

      setWidth(200)

    } else if (imageSize.value === "30x30") {

      setWidth(250)

    } else if (imageSize.value == "40x40") {

      setWidth(300)

    } else if (imageSize.value == "50x50") {

      setWidth(350)

    } else {
      setWidth(200); // This is be executed when the state changes
    }


  }, [imageSize]);




  // let url = location.state.url;

  console.log("test")
  console.log(location.state.url)


  //const displayUrl = `./${tempFileUrl}.png`

  async function onOpenSubmit() {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }




  }

  // This function will handle the submission.
  async function onSaveSubmit2() {




    const imageUrlSave = { imageUrl: location.state.url };

    await fetch("http://localhost:5000/image/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      body: JSON.stringify(imageUrlSave),
    }).catch(error => console.error(error));


    console.log("saved")
    NotificationManager.success('Added to collection!', 'Saved', 3000);

  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <div class="container">
        <div id="top" class="row">
          <div id="top2" class="col-auto">
            <img id="imagemain" src={location.state.url} class="img-fluid" alt="Responsive image" />
          </div>
          <div class="col-auto">
            <div id="textt">
              <h1 class="liltitel">A masterpiece was created!</h1>

              <div>
                <button id="button1" type="button" class="btn btn-primary btn-lg" onClick={handleSubmit(onOpenSubmit)}>Buy</button>
              </div>

              <div>
                <button id="button2" type="button" class="btn btn-primary btn-lg" onClick={handleSubmit(onSaveSubmit2)} >Save to collection</button>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div class="container" id="kollum" >
          <div class="row" id="kolol" >
            <div id="testtt" class="col-auto">


              <img class="image3" src="backgr.png" width={400} />


              <img class="image1" src={`./${imageCol.value}.png`} width={width * 0.7} />

              <img class="image2" src={location.state.url} width={width * 0.49} />
            </div>

            <div id="testt" class="col">
              <h2>Purchase framed image</h2>

              <Select id="color" options={optionsCol} defaultValue={{ label: "Black", value: "Black" }} onChange={(choice) => setUserColChoice(choice)} />

              <Select id="size" options={optionsSize} onChange={(choice) => setUserSizeChoice(choice)} />

              <div class="quant">
                <QuantityPicker id="quant" min={1} onChange={getPickerValue} smooth />
              </div>

              <div id="section-1"></div>


              <div class="price">
                <h3>{price} Sek</h3>
              </div>

              <div>
                <button id="chbutton" type="button" class="btn btn-primary btn-lg" onClick={handleSubmit(onSaveSubmit)} >Add to shoppingcart</button>
              </div>
              <NotificationContainer />
            </div>
          </div>

        </div>
      </div>













    </div>

  );

}

