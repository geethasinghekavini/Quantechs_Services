import React from 'react';
import './Products.css';
import ImageCardGrid from './ImageCardGrid1';

function Products() {
    return(
    <div className="App-p">
 
        <div class="content2-p">
            <div className="right-content2-p">
                    <div className="topic2-p"> <span className="blue-text-p"> Our </span> Products </div>
                <p className="step-into-a-realm-p">
                        At Quantechs, we are passionate about harnessing the power of technology to transform businesses.
                        Our cutting-edge software solutions are designed to propel your organization to new heights, streamline
                        your operations, and enhance your customer experiences.
                </p>
            </div>
            </div>

            <div className="image-card-grid-container">
                <ImageCardGrid />
            </div>

            <div className="text1"> Insurance Broker Portal </div>
            <div className="text2"> Insurance Management Platform </div>
            <div className="text3"> CaseLife </div>
            <div className="text4"> Enterprise Reporting </div>
            <div className="text5"> Travel Insurance </div>
            <div className="text6"> HR Management Platform </div>

       {/*<div >*/}
       {/* <div className="square-p">*/}
       {/*             <div className="transparent-rectangle-p">Insurance Broker Portal</div>*/}

       {/*     <img class="img1-p" src=" \images\download (1).jpg" alt="Square Image" />*/}
       {/* </div>*/}

       {/* <div className="square2-p">*/}
       {/*     <div className="transparent-rectangle2-p">Insurance Management Platform</div>*/}
       {/*     <img class="img2-p" src=" \images\images.jpg" alt="Square Image" />*/}
       {/* </div>*/}

       {/* <div className="square3-p">*/}
       {/*     <div className="transparent-rectangle3-p">  Workers compensation case management Software </div>*/}
       {/*     <img class="img3-p" src="\images\images (1).jpg" alt="Square Image" />*/}
       {/* </div>*/}

       {/* <div className="square4-p">*/}
       {/*     <div className="transparent-rectangle4-p"> Multi-tenant Enterprise Reporting Solution </div>*/}
       {/*     <img class="img4-p" src="\images\istockphoto-1077027080-612x612.jpg" alt="Square Image" />*/}
       {/* </div>*/}

       {/* <div className="square5-p">*/}
       {/*     <div className="transparent-rectangle5-p"> HR Management Platform </div>*/}
       {/*     <img class="img5-p" src="\images\photo-1606857521015-7f9fcf423740.jpg" alt="Square Image" />*/}
       {/* </div>*/}

       {/* <div className="square6-p">*/}
       {/*     <div className="transparent-rectangle6-p">  Travel Insurance policy application and life cycle management </div>*/}
       {/*     <img class="img6-p" src="\images\claim-form.jpg" alt="Square Image" />*/}
       {/* </div>*/}
       {/* </div>*/}

        <div class="content3-p">
            <div className="left-content3-p">
                <img className="octagon-shape-clip-6-p" alt="Octagon shape clip" src="\images\octogon.png" />
                    <img className="overlapimage-p" alt="Octagon shape clip" src=" \images\img-service1.png"/>
            </div>
            <div className="right-content3-p">
                <h1 class="head-product1-p"> <span className="blue-text"> Innovative </span> Solutions </h1>
                <p className="content-paragraph1-p">
                    We're not just customer-centric; we're customer-obsessed. Our obsession? Understanding your unique needs and aspirations,
                    then weaving software magic that not only meets them but propels you into the future
                </p>
                    <a href="/AboutUs"><button className="btn-services-p"> Our Projects</button></a>
            </div>
        </div>

        <div class="content6-p">
            <div className="rectangle-p">
                <div className="head-contact-p">Ready to scale your software development?</div>
                <p className="contact-para-p">
                    We're not just transforming industries; we're elevating the way businesses operate.
                    Let us be your bridge to cutting-edge technology, tailored solutions, and a roadmap to success.
                </p>
                    <a href="/ContactUs"><button class="blue-button-con-p">Let &apos; s Talk</button></a>
            </div>
        </div>


    </div>
    );
}

export default Products;