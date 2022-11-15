import React from 'react';
import { useState } from "react";
import axios from "axios";

import  SubHeading   from '../../components/SubHeading/SubHeading';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);


const Laurels = () => {
  const [id, setId] = useState("");
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  async function handleSubmit(event)
  {
      event.preventDefault();
  try
      {
       await axios.post("http://localhost:8090/contact" , 


      {
      id: id,
      fname: firstname,
      lname : lastname,
      email : email,
      phone : phone,
      message :message 
      });
        alert("User Registation Successfully");
        setId("");
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setMessage("");

      }
  catch(err)
      {
        alert("User Registation Failed");
      }
 }



  return(
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="">
      <SubHeading title="" />
    <h1 className="headtext__cormorant"> Contact Us</h1>
<br></br>
      <form className="register-form" onSubmit={handleSubmit}> 

      <input type="text" 
    name="firstname" 
    placeholder=" &nbsp;
    Prénom &nbsp;
    " 
    onChange={(event) =>
        {
            setFname(event.target.value);       
        }}
    />
<br></br>
<br></br>

    <input type="text" 
    name="lastname"
    placeholder="&nbsp;
    Nom &nbsp;
    "
    onChange={(event) =>
        {
            setLname(event.target.value);       
        }}           
    />
<br></br>
<br></br>

     
    <input type="text" 
    name="email" 
    placeholder="&nbsp;
    Email&nbsp;
    "
    onChange={(event) =>
        {
            setEmail(event.target.value);       
        }}           
    />
 <br></br>
 <br></br>


<input type="text" 
    name="phone" 
    placeholder="&nbsp;
    Numéro de téléphone &nbsp;
    "
    onChange={(event) =>
        {
            setPhone(event.target.value);       
        }}           
    />
<br></br>
<br></br>

<div className="msg">

<textarea type="text" 
    name="message" 
    placeholder="&nbsp;
    Message &nbsp;
    "
    onChange={(event) =>
        {
            setMessage(event.target.value);       
        }}           
    />
    <br></br>

        <button type="submit" >Envoyer</button>
        
    </div>
    </form>

    </div>


    
  </div>
);
      }
export default Laurels;
