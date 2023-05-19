import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Userfront from "@userfront/react";
import { Navigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { NotificationContainer, NotificationManager } from 'react-notifications';


import '../css/cart.css';

export default function Shoopingcart() {



  const Image = (props) => (

    <tr>
      <td>
        <img src={props.url} width="100"></img>
        <button data-value={props.url} onClick={remove} >Delete</button>

      </td>

    </tr>
  );

  const [imageListSate, setImageListState] = useState([]);

  const { handleSubmit } = useForm()
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [totPrice, setTotPrice] = useState(0);

  const remove = async (e) => {

    const imageUrlSave = { imageUrl: e.currentTarget.getAttribute("data-value") };

    await fetch("https://artcave-react.onrender.com/shoppingcart/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      body: JSON.stringify(imageUrlSave),

    }).catch(error => console.error(error));

    console.log("!")
    console.log(imageListSate)

    var array = images // make a separate copy of the array
    var index = array.map(e => e.url).indexOf(imageUrlSave.imageUrl)
    if (index !== -1) {
      array.splice(index, 1);

      console.log("inne i funktion")
    }
    setImageListState([array])
    console.log("Bytt array")
    console.log(imageListSate)
    NotificationManager.error('Image removed', 'Deleted', 3000);
  }






  useEffect(() => {

    console.log(images)

    let tmp = 0;

    images.map((image) => {
      tmp = tmp + image.price
    })

    setTotPrice(tmp)

  }, [images]);



  // This function will handle the submission.
  useEffect(() => {


    async function getImages() {
      const response = await fetch(`https://artcave-react.onrender.com/shoppingcart/`, {
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


      setImages(tmpImages);
      console.log(tmpImages)


    }




    getImages();



  }, [images.length]);




  function imageList() {
    return images.map((image) => {
      return (
        <div>
          <Image
            url={image.url}

          />

          Color: {image.col.value}
          <br />
          Size: {image.size}
          <br />
          quantity: {image.quantity}
          <br />
          price: {image.price}
        </div>
      );
    });
  }


  const checkoutCall = async () => {
    console.log("item2" + item2)

    // When a post request is sent to the create url, we'll add a new record to the database.

    const res = await fetch("https://artcave-react.onrender.com/checkout", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(item2),
      
    }).catch(error => console.error(error));
    
    const body = await res.json()
    window.location.href = body.url

  }


  //-------------------------------

  let stripePromise;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe("pk_test_51MzR8NCnJhjWx3stk5qzzLE88Wx9BpjPzVyrBVizNIe35mYYaR7n5FZVCn56cZRqju0V0HrIuVQdXKmsK5PxWjuw00vp29v28D");
    }

    return stripePromise;
  };


  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  let item2 = []

  images.map((image) => {


    if (item2.some(test => test.price === image.priceId)) {
      let upd_obj = item2.findIndex((obj => obj.price == image.priceId));
      item2[upd_obj].quantity += image.quantity;

      //item2[item2.indexOf(image.priceId)].quantity = item2[item2.indexOf(image.priceId)].quantity + image.quantity
    } else {
      item2.push({
        price: image.priceId,
        quantity: image.quantity,
      })
    }






  })

  const item = {
    price: 100, //size
    quantity: images.length
  };
  console.log(item)
  console.log(item2)



  const checkoutOptions = {
    

    lineItems: item2,
    mode: "payment",

    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/shoppingcart`
  };


  const redirectToCheckout = async () => {

    checkoutCall();

    // setLoading(true);
    // console.log("redirectToCheckout");

    // const stripe = await getStripe();
    
  


    // const { error } = await stripe.redirectToCheckout(checkoutOptions);
    // console.log("Stripe checkout error", error);

    // if (error) setStripeError(error.message);
    // setLoading(false);




  };

  if (stripeError) alert(stripeError);



  //--------------


  function RequireAuth({ children }) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
      // Redirect to the /login page
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  }

  function Listitem(image) {



    return (
      <li class="list-group-item">

        <div class="container">

          <div class="row">
            <div id="biild" class="col-auto" >

              <img src={image.url} width={250}></img>
            </div>

            <div id="info" class="col-sm">
              <b>Color:</b> {image.col}
              <br />
              <b>Size:</b> {image.size}
              <br />
              <b>quantity:</b> {image.quantity}
              <br />
              <b>price:</b> {image.price}
              <div>
                <a id="delbtn" class="btn btn-danger" data-value={image.url} onClick={remove}>Delete</a>
              </div>

            </div>


          </div>
        </div>


      </li>

    )

  }

  function IfEmpty() {
    console.log(images)

    if (images.length === 0) {
      const message = "no saved images to display"
      return <div id="message">
        <h3>
          {message}
        </h3>

      </div>

    } else {
      return null;
    }


  }


  return (
    <div id="mainbig">

      <RequireAuth>
        <IfEmpty />


        <ul class="list-group">
          {images.map(Listitem)}
        </ul>
      </RequireAuth>


      <div id="prissam">

      
      <h3>
        total price:
      </h3>
      <h1>
        {totPrice} Sek
      </h1>
      <a id="chckbtn" class="btn btn-primary btn-lg" onClick={redirectToCheckout}>Checkout</a>
      </div>

      {/* <form action="http://localhost:5000/checkout" method="POST" >
          <input name="price" value={100}/>
        <button type="submit">
          Checkout
        </button>
       
        
       

      </form> */}

      

      <NotificationContainer />

      {/* <button  onClick={checkoutCall}> Checkout</button> */}

      {/* <button  onClick={pay}>checkout</button> */}

    </div>

  );

}


