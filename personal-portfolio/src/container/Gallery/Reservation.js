import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading  from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Gallery.css';


const Reservation = () => {
  const scrollRef = React.useRef(null);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  async function handleSubmit(event)
  {
      event.preventDefault();
  try
      {
       await axios.post("http://localhost:8090/Proposition" , 


      {
      id: id,
      email : email,
      message :message ,
      category: category
      });
        alert("Commande Envoyée avec Succés ");
        setId("");
        setEmail("");
        setMessage("");
        setCategory("");

      }
  catch(err)
      {
        alert("Commande  Non Envoyée  ");
      }
    }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext1__cormorant">Reserve Your Place</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
       
        </p>

        <form className="register-form1" onSubmit={handleSubmit}> 
        <input type="text" 
    name="email" 
    placeholder=" &nbsp;
    Email &nbsp;
    " 
    onChange={(event) =>
        {
            setEmail(event.target.value);       
        }}
    />
<br></br>
<br></br>
<input type="text" 
    name="category" 
    placeholder=" &nbsp;
    Phone &nbsp;
    " 
    onChange={(event) =>
        {
            setCategory(event.target.value);       
        }}
    />
    <br></br>
<br></br>
<input type="text" 
    name="category" 
    placeholder=" &nbsp;
    Time &nbsp;
    " 
    onChange={(event) =>
        {
            setCategory(event.target.value);       
        }}
    />
<br></br>
<br></br>

  

<input type="text" 
    name="category" 
    placeholder=" &nbsp;
    Date &nbsp;
    " 
    onChange={(event) =>
        {
            setCategory(event.target.value);       
        }}
    />
    
      
   


    <br></br>
    <br></br>


<div className="msg">

<input type="text" 
    name="message" 
    placeholder="&nbsp;
    Number of Guests &nbsp;
    "
    onChange={(event) =>
        {
            setMessage(event.target.value);       
        }}           
    />
    <br></br>
    <br></br>


        <button className='app__gallery-content_button' type="submit" >&nbsp;Send </button>
        
    </div>
    </form>
      

      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery05, images.gallery06, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Reservation;