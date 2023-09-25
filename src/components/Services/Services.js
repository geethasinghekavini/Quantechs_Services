////import logo from './logo.svg';
import './Services.css';
import ImageCardGrid from './ImageCardGrid';

function Services(){
    return (
        <div className="App-s">
            <div class="content2">
                <div className="right-content2">
                    <div className="topic2"> <span className="blue-text">Our services </span> and Expertise </div>
                    <p >
                        At Quantechs, we're not just a software company; we're your strategic partner in driving innovation and growth.
                        We specialize in crafting custom IT solutions that span diverse industries, providing a competitive edge through
                        cutting-edge technology. Our prowess shines particularly in the realm of Insurance and Financial Software, where
                        we're the architects behind solutions like claims and case management platforms that redefine efficiency.
                    </p>
                </div>
                <div className="right-content2">
                    <img className="leftImage1" alt="Octagon shape clip" src="\images\img-service2.png"/>
                    <img className="octagon-shape-clip-5" alt="Octagon shape clip" src="\images\octogon.png"/>
                </div>
            </div>
            <div className="image-card-grid-container">
                <ImageCardGrid />
            </div>

            <div class="content3-s">

                <div className="left-content3">
                    <img className="octagon-shape-clip-6" alt="Octagon shape clip" src="\images\octogon.png" />
                    <img className="overlapimage" alt="Octagon shape clip" src="\images\img-service1.png" />
                </div>

                <div className="right-content3">
                    <h1 class="head-product"> <span className="blue-text"> Innovative </span> Solutions </h1>
                    <p className="content-paragraph1">
                        We're not just customer-centric; we're customer-obsessed. Our obsession? Understanding your unique needs and aspirations,
                        then weaving software magic that not only meets them but propels you into the future
                    </p>
                    <a href="/Products"><button className="btn-services"> Our Products</button></a>
                </div>
            </div>

            {/*<div class="content5">*/}
            {/*    <div className="topic3-s"><span className="blue-text"> Customer Stories </span></div>*/}
            {/*    <p className="testomonials-s">*/}
            {/*        Lorem ipsum dolor sit amet. Et temporibus molestiae nam earum quia aut quas deleniti ut quis voluptatibus.*/}
            {/*        In dolores sapiente quo soluta aliquam ut iure rerum in odio quae est eaque fugit. Aut saepe sapiente in veniam labore*/}
            {/*        et debitis porro aut enim modi*/}
            {/*        </p>*/}
                    
            {/*    <div className="rec-1">*/}
            {/*        <p className="rec1-s">Partner with Quantech to drive real outcomes. We will show you what it means to take your business to the next*/}
            {/*            level.Partner with Circles to drive real outcomes. We’ll show you what it means to take your business to the next level.Partner*/}
            {/*            with Circles to drive real outcomes. We will show you what it means to take your business to the next level. </p>*/}

            {/*    </div>*/}
            {/*    <div className="rec-2">*/}
            {/*        <p className="rec1-s">Partner with Quantech to drive real outcomes. We will show you what it means to take your business to the next*/}
            {/*            level.Partner with Circles to drive real outcomes. We’ll show you what it means to take your business to the next level.Partner*/}
            {/*            with Circles to drive real outcomes. We will show you what it means to take your business to the next level.</p>*/}

            {/*    </div>*/}
            {/*    <div className="rec-3">*/}
            {/*        <p className="rec1-s">Partner with Quantech to drive real outcomes. We will show you what it means to take your business to the next*/}
            {/*            level.Partner with Circles to drive real outcomes. We’ll show you what it means to take your business to the next level.Partner*/}
            {/*            with Circles to drive real outcomes. We will show you what it means to take your business to the next level. </p>*/}

            {/*    </div>*/}
            {/*    <img className="test-img1" alt="Ellipse" src="\images\images (4).jpg" />*/}
            {/*    <img className="test-img2" alt="Ellipse" src="\images\images (4).jpg" />*/}
            {/*    <img className="test-img3" alt="Ellipse" src="\images\images (4).jpg" />*/}
            {/*</div>*/}


            <div class="content6-s">
                <div className="rectangle-s">
                    <div className="head-contact-s">Ready to scale your software development?</div>
                    <p className="contact-para">
                        We're not just transforming industries; we're elevating the way businesses operate.
                        Let us be your bridge to cutting-edge technology, tailored solutions, and a roadmap to success.
                    </p>
                    <a href="/ContactUs"><button class="blue-button-con">Let &apos; s Talk</button></a>
                </div>
            </div>

        </div>
    );
}

export default Services;

