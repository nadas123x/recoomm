import React from 'react';
import { useState } from "react";
import axios from "axios";

import  SubHeading   from '../../components/SubHeading/SubHeading';
import { images, data } from '../../constants';
import './Laurels.css';

function CustomOrd() {
    const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

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
    <div className="app__bg app__wrapper section__padding" id="awards">

    <div className="">

      <SubHeading title="Let's Hear Your Food Suggestions " />
      <form className="register-form" onSubmit={handleSubmit}> 

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
    Category &nbsp;
    " 
    onChange={(event) =>
        {
            setCategory(event.target.value);       
        }}
    />
<br></br>
<br></br>

  

     
   




<div className="msg">

<textarea type="text" 
    name="message" 
    placeholder="&nbsp;
    Proposition &nbsp;
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

export default CustomOrd