import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';





const Contact = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [usermessage, setUsermessage] = useState("");
  const [message, setMessage] = useState()


  const form = useRef();

  const sendEmail = (e) => {
    setMessage()
    e.preventDefault();

    emailjs.sendForm('service_6nnf7nh', 'template_raprwgg', form.current, 'f1LguMy0z0BDG-yOs')
      .then((result) => {
        console.log(result.text);
        setMessage("Message sent successfully")
        setUsermessage("")
      }, (error) => {
        console.log(error.text);
        setMessage("Error sending message")
      });

  };


  return (
    <div className="contactdiv" id='Contact'>
      <div className="contactheading">
        Contact Us :
      </div>
     

      <div className="formdiv">
     
        {/* blur div */}
        <div className='blur contactblur' style={{ background: "rgb(238 210 255)" }}></div>
  
        <div className="contactinputdiv">
           
          <form ref={form} onSubmit={sendEmail}>

            <input type="text" name="user_name" placeholder='Name :' value={username} onChange={(event) => setUsername(event.target.value)} required />

            <input type="email" name="user_email" placeholder='Email :' value={useremail} onChange={(event) => setUseremail(event.target.value)} required />

            <textarea name="message" cols="50" rows="7" placeholder='Message :' value={usermessage} onChange={(event) => setUsermessage(event.target.value)} required></textarea>
 
            {message?<input className='button' type="submit" value="Send Again" />
            :
            <input className='button' type="submit" value="Send" />
            }
            {message && <div className="message">{message}</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact