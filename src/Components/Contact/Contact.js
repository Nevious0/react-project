import React from 'react'
import './Contact.css'
import myLogo from '../../logo.jpg' 
import myPerson from '../../person.jpg' 

const Contact = () => {
    return (
        <div className="contact-details">
         <div className="myContact">
             <div className="personal-1">
                 <img className="logo" src={myLogo} alt="my logo"/>
                 <h2 className="name"><i className="fas fa-user"></i> Nevious Ndlovu</h2>
            <h3 className="web">Web Development</h3>

         <div className="social">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            </div>

            <h2>Address</h2>
            <h3><i className="fas fa-map-marker-alt"></i> JHB Midrand</h3>
            <h4 className="email"><i className="fas fa-envelope-open"></i> neviousndlovu@gmail.com</h4>
            <button className="btn">Email Me</button>
             </div>
             
             <div className="personal-2">
                 <div className="my-image">
                    <img className="second-image" src={myPerson} alt=""/>
                 </div>
             </div>
         </div>
         <footer>
             <h4>Copyrite&copy;neviousndlovu@gmail.com</h4>
         </footer>
       </div>
    )
}

export default Contact
