import './Home.css';
import React, { useState, useEffect } from 'react';

function Home() {

    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => {
                const nextNumber = prevNumber + 1;
                return nextNumber <= 9 ? nextNumber : prevNumber;
            });

            setNumber1(prevNumber => {
                const nextNumber = prevNumber + 1;
                return nextNumber <= 20 ? nextNumber : prevNumber;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
  
        <body>
            <div className="App-h">
        <div className="content-container">
            <div className="left-content" >
                        <h1 className="elevating-text" ><span className="blue-text">Elevating  Tomorrow  Through </span> Digital Innovation</h1>
                <p className="content-paragraph">
                    Discover a world of trusted global software solutions that transcend industries. At the heart of Quantechs,
                    we specialize in crafting innovative software solutions for insurance and finance, alongside remarkable CRM,
                    ERP, and Mobile solutions. Each of our offerings is meticulously tailored to align seamlessly with your unique
                    mission and goals.
                </p>
                        <a href="/ContactUs"> <button className="blue-button1">Talk To Us</button></a>
            </div>

            {/*<div className="right-content">*/}

                {/*<div className="overlap-2">*/}
                    <img className="imgonline1" alt="image1" src="\images\Untitled design (5).png"/>
                            
                    {/*<img className="imgonline-com-ua" alt="Imgonline com ua" src="\images\imgonline-com-ua-shape-0lsbEkpeqGDDj.png" />*/}
                    {/*<img className="imgonline-com-ua-2" alt="Imgonline com ua" src="\images\imgonline-com-ua-shape-Sw6F7NIW32E0.png" />*/}
                    {/*<img className="imgonline-com-ua-3" alt="Imgonline com ua" src=" \images\imgonline-com-ua-shape-TE5WXBTzef7k.png" />*/}
                {/*</div>*/}
                {/*<img*/}
                {/*    className="octagon-shape-clip"*/}
                {/*    alt="Octagon shape clip"*/}
                {/*    src="\images\octogon.png"*/}
                {/*/>*/}
                {/*<img*/}
                {/*    className="octagon-shape-clip-2"*/}
                {/*    alt="Octagon shape clip"*/}
                {/*    src="\images\octogon.png"*/}
                {/*/>*/}
                {/*<img*/}
                {/*    className="octagon-shape-clip-3"*/}
                {/*    alt="Octagon shape clip"*/}
                {/*    src=" \images\octogon.png"*/}
                {/*/>*/}

            {/*</div>*/}
            </div>

            <div className="content1">
                            <div className="left-content1">
                        <img className="left-image" src=" \images\img-home2.png" alt="Left Image" />
                                <img className="octagon-shape-clip-4" alt="Octagon shape clip" src="\images\octogon.png" />
                            </div>
                            <div className="right-content1">
                        <h1 className="topic1"><span className="blue-text">Building on Trust,</span> Delivering Excellence</h1>
                                <p className="content-paragraph1">
                                    Trust is the cornerstone of our relationships. We take immense pride in the unwavering trust our clients place in us.
                                    It's this trust that fuels our commitment to deliver nothing short of exceptional service and game-changing solutions.
                                    Together, we don't just build solutions; we build transformative partnerships that shape industries.
                                </p>
                            <a href="/Services"><button className="btn-services"> Our Services</button></a>
                            </div>
                   </div>

            <div class="content2">
                        <div className="right-content2">
                        <div className="topic2"> <span className="blue-text">Your Journey</span>  with Quantechs  </div>
                            <p className="step-into-a-realm">
                                Step into a realm where solutions are tailored to fit the contours of your vision. Whether you&#39;re
                                navigating the intricacies of finance, seeking to enhance customer relationships, or exploring the
                                limitless possibilities of mobility, Quantechs is your compass. Join us on a journey where empowerment
                                meets innovation, and tomorrow &#39;s solutions become today&#39;s reality.
                            </p>
                            <div class="numberBox-h">
                            <div className="experience">
                                    <div className="blue-box">
                                        <div className="text-wrapper2"> {number}+ </div>
                                    <div className="text-wrapper1"> years of experience </div>
                            </div>
                        </div>

                            <div className="projects">
                                <div className="blue-box">
                                        <div className="text-wrapper4"> {number1} +</div>
                                <div className="text-wrapper3">Projects</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content2">
                        <img className="leftimage1" src="\images\img-home4.png" alt="Left Image" />
                           <img className="octagon-shape-clip-5" alt="Octagon shape clip" src="\images\octogon.png" />
                        </div>                     
                    </div>    
                    <div class="content3">
                        <div className="left-content3">
                            <img className="leftimage2" alt="Octagon shape clip" src="\images\imgonline-com-ua-shape-hwS9yGvDvkk.png" />

                                <div className="blue-box1">
                                    <div className="text-wrapperSmall">Cloud Intergration</div>
                            </div>
                            <div className="blue-box2">
                                <div className="text-wrapperSmall">Software Solutions</div>
                            </div>
                            <div className="blue-box3">
                                <div className="text-wrapperSmall">Counsulting</div>
                            </div> 
                        </div>
                        <div className="right-content3">
                        <h1 className="topic1"> <span className="blue-text">Innovative </span> solutions</h1>
                            <p className="content-paragraph1">
                                Green code, brighter future. We're committed to crafting software solutions that not only skyrocket success but
                                also leave a lasting positive footprint on our world businesses, society, and Mother Earth.
                            </p>
                        <a href="/Products"><button className="btn-services"> Our Products</button></a>
                        </div>
                    </div>

                    <div class="content4">
                        <div className="right-content2">
                        <div className="topic2"> <span className="blue-text"> Cherishing Our </span> Quantechs Team</div>
                            <p className="step-into-a-realm">
                                At Quantechs, our people shine brightly, celebrated for their boundless creativity and unwavering competence.
                                Their dedication to crafting exceptional technology solutions is unparalleled, a testament to the greatness
                                they build. What truly sets them apart is the genuine pride they take in being architects of our clients' software
                                applications, contributing meaningfully to every digital masterpiece.
                            </p>
                        <a href="/OurTeam"> <button className="btn-services"> Our Team</button></a>
                        </div>
                        <div className="right-content2">
                        <img className="img-team1" alt="team1" src="  \images\t5.png"/>
                        <img className="img-team2" alt="team2" src="\images\t2.png"/>
                        <img className="img-team3" alt="team3" src="\images\t4.png"/>
                        </div>
                    </div>
                {/*    <div class="content5">*/}
                {/*        <div className="topic3"> Quantechs <span className="blue-text">  Customer Chronicles </span></div>*/}
                {/*        <p className="testomonials">*/}
                {/*            Embark on a journey through the remarkable narratives of how Quantechs' extended tech teams propel our*/}
                {/*            customers towards growth and the realization of audacious objectives.*/}
                {/*        </p>*/}
                {/*        <div className="rectangle1">*/}
                {/*            <p className="rec1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae urna et turpis feugiat aliquam a a lacus.*/}
                {/*                Vivamus dignissim massa sed augue interdum, a porttitor justo hendrerit. </p>*/}
                {/*        </div>*/}
                {/*        <div className="rectangle2">*/}
                {/*            <p className="rec1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae urna et turpis feugiat aliquam a a lacus.*/}
                {/*                Vivamus dignissim massa sed augue interdum, a porttitor justo hendrerit. </p>*/}

                {/*        </div>*/}
                {/*        <div className="rectangle3">*/}
                {/*            <p className="rec1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae urna et turpis feugiat aliquam a a lacus.*/}
                {/*                Vivamus dignissim massa sed augue interdum, a porttitor justo hendrerit. </p>*/}

                {/*        </div>*/}
                {/*        <img className="ellipse1" alt="Ellipse" src="\images\customer1.png"/>*/}
                {/*        <img className="ellipse2" alt="Ellipse" src=" \images\customer2.png"/>*/}
                {/*        <img className="ellipse3" alt="Ellipse" src="\images\customer1.png"/>*/}
                {/*</div>*/}

                    <div class="content6">
                        <div className="rectangle">
                                  <div className="head-contact">Let&apos;s Talk</div>
                            <p className="contact-para">
                                We're not just transforming industries; we're elevating the way businesses operate.
                                Let us be your bridge to cutting-edge technology, tailored solutions, and a roadmap to success.
                            </p>
                        <a href="/ContactUs"><button class="blue-button-con">Talk to us</button></a>
                        </div>
                    </div>
                </div>

              
            </body>
           
 );
}

export default Home;