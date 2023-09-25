import './App.css';
/*import React, { useState, useEffect } from 'react';*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import OurTeam from './components/OurTeam/OurTeam';
import Products from './components/Products/Products';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';


function App() {

    return (
      <BrowserRouter>
      <div className="App">
          <header className="App-header">
              <div className="navbar-container">
                  <div className="logo">
                      <a href="/"> <img src="\images\logo.png" alt="Logo" /> </a>
                  </div>
                        <div className="navbar">
                      <ul>
                          <li><a href="/Services">Our Services</a></li>
                          <li><a href="/AboutUs">About us</a></li>
                          <li><a href="/OurTeam">Life at Quantechs</a></li>
                          <li><a href="/Products">Products</a></li>
                          <li> </li>
                          <li></li>    
                      </ul>
                      
                  </div>
                  <div className="overlap">
                     <a href="/ContactUs">   <button class="blue-button">Talk to us</button></a>
                  </div>
                    </div>
                    </header>


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/OurTeam" element={<OurTeam />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                  
                </Routes>

          <footer>
              <div className="footer">
                  <img className="image-logo" alt="Image" src="\images\logo.png"/>
                  <p className="footer-para">
                      Trusted global software solutions for diverse industries. Expertise in innovative Insurance and Financial
                      Software, CRM, ERP, and Mobile solutions, tailored to each client&#39;s mission. Pride in client trust,
                      delivering exceptional service, and forging transformative partnerships.
                  </p>
                  {/*<div className="txt-why">Why Quantechs</div>*/}
                  {/*<div className="foot1">Services</div>*/}
                  {/*<div className="foot2">Products</div>*/}
                  {/*<div className="foot3">About Us</div>*/}

                  <div className="text-wrapper-cu">Contact Us</div>
                   
                      {/*<span className="txt-ch">*/}
                      {/*    Office*/}
                      {/*    <br />*/}
                      {/*</span>*/}
                      <span className="span">
                          6/1 Galpotta Road,
                          <br />
                          Nawala,
                          <br />
                          Sri Jayardenepura Kotte,
                          <br />
                          Sri Lanka
                  </span>

                  <img className="img0" alt="Image" src="\images\icon3.png" />
                  <img className="img1" alt="Image" src="\images\icon2.png" />
                  <img className="img2" alt="Image" src="\images\icon1.png" />
               


                  {/*<span className="txt-ch1">*/}
                  {/*    Hotline*/}
                  {/*    <br />*/}
                  {/*</span>*/}
                  <span className="span1">
                      +94 112 805 307
                  </span>

                  {/*<span className="txt-ch2">*/}
                  {/*    Email at*/}
                  {/*    <br />*/}
                  {/*</span>*/}
                  <span className="span2">
                      email@quantechs.com
                  </span>

                        <a href="https://www.linkedin.com/company/quantechs/"><img className="sm1" alt="Image" src="\images\sm2.png" /></a>
                        <a href="https://web.facebook.com/Quantechs"><img className="sm2" alt="Image" src="\images\sm1.png" /></a>

                        <div className="foot-txt"> © Copyright 2023 by Quantechs Services. All Rights Reserved.</div>
              </div>

                   
          </footer>            
      </div>
       </BrowserRouter>
  );
}
            
export default App;
