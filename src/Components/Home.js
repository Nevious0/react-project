import React from 'react'

import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-info">
            <h1>Hello and welcome ...</h1>
            <h4>My name is <span> Nevious Ndlovu</span></h4>
            <h6>I am a Web Developer</h6>
            </div>
           
            <div className="home-second-layout">
                <div className="languages">
                <div className="icon-1">
                <i class="fab fa-html5"></i>
                </div>
                <h4>HTML5</h4>
                </div>

                <div className="languages" >
                <div className="icon-2">
                <i class="fab fa-css3-alt"></i>
                </div>
                <h4>CSS3</h4>
                </div>

                <div className="languages">
                <div className="icon-3">
            <i className="fab fa-react"></i>
                </div>
                <h4>REACT.JS</h4>
                </div>

                <div className="languages">
                <div className="icon-4">
            <i className="fab fa-js-square"></i>
                </div>
                <h4>JAVASCRIPT</h4>
                </div>

                <div className="languages">
        <div className="icon-5">
            <i className="fab fa-node-js"></i>
        </div>
        <h4>NODE.JS</h4>
        </div>
            </div>

            <div className="home-third-layout">
                <div className="first-description">
                    
                    <div className="desc-1">
                        <h2>About Me</h2>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                    </div>
                    <div className="desc-2">
                        <h2>My journey</h2>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
<h4>Copyrite&copy;neviousndlovu@gmail.com</h4>
            </div>
        </div>
    )
  }
  export default Home;