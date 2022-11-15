import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
import { useEffect } from "react";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Contact = () => {
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

  return (
    <section className="contact" id="connect">

<div className="register-container">
<Col xs={49} md={19} xl={5} >
<br></br>
    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
        </div>}
    </TrackVisibility>
    </Col>
    <form className="register-form" onSubmit={handleSubmit}> 
    <br></br>    
    
    <div className="contactez">

    <h6 class="tagline">

Osez nous contacter sans plus attendre !</h6>
    </div>

   

   

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
<div className="msg">

<input type="text" 
    name="message" 
    placeholder="&nbsp;
    Message &nbsp;
    "
    onChange={(event) =>
        {
            setMessage(event.target.value);       
        }}           
    />
    </div>
    <div className="contactez">

    <button type="submit" >Envoyer</button>

</div>
    </form>     


</div>
    </section>
  )
}
