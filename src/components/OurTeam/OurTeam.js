
import './OurTeam.css';
import BlueRectangle from './BlueRectangle';


function OurTeam() {
    return (
        <div className="team">
            
                <div className="container-t">
                    <div className="circle1-t"> </div>
                    <div className="circle2-t"> </div>
                <img className="headimage1-t" src="\images\img-team6.png" alt="Image" />
                <img className="headimage2-t" src="\images\img-team1.png" alt="Image" />
                <img className="headimage3-t" src="\images\img-team2.png" alt="Image" />
                </div>

            <div class="content-1-t">
                <div className="right-content-t">
                    <div className="topic-1-t"> <span className="blue-text"> Thriving Together </span> at Quantechs  </div>
                    <p >
                        At Quantechs, we're devoted to nurturing a harmonious blend of work and life. We're dedicated to fostering your personal and professional
                        growth journey. Operating within a flat, non-hierarchical structure, we place immense emphasis on the power of teamwork. In the orchestra
                        of success, a team's symphony is only as strong as its every note. We stand united, providing unwavering support and encouragement to elevate
                        each other's performance.
                    </p>
                </div>
            </div>
            <div class="content-2-t">
                <div className="right-content-2-t">
                    <div className="topic-2-t"><span className="blue-text">Valuing Our Quantechs Team </span></div>
                    <p>
                        At Quantechs, it's not just a job; it's a journey of growth, camaraderie, and shared success.
                        Welcome to a realm where you're not just an employee but a valued partner in our mission to
                        transform industries through innovation and collaboration.
                    </p>
                </div>
                <div className="right-content-2-t">
                    <img className="leftimage-1-t" src="\images\octogon.png" alt="Image" />
                    <img className="leftimage-2-t" src="\images\img-team-3.png" alt="Image" />
                </div>
            </div>

            <div class="empowering-staff">
            <div className="topic-3t">Empowering Our Staff</div>
            <div className="row1t">
                <BlueRectangle
                    //{/*image="images/learning.png"*/}
                        title="Inquisitiveness and a disposition for continuous learning"
                        content="Have a readiness to investigate novel concepts and adopt a commitment to lifelong learning"
                />
                <BlueRectangle
                    //{/*image="images/respect.png"*/}
                        title="Candidness and consideration"
                        content="We offer and accept feedback with a receptive attitude, consistently presuming positive motivations"
                />
            </div>
            <div className="row2t">
                <BlueRectangle
                    //{/*image="images/united.png"*/}
                        title="Collaborative camaraderie and unity"
                        content="We confront challenges as a team, embracing both successes and failures collectively, without assigning blame."
                />
                <BlueRectangle
                    //{/*image="images/laugh.png"*/}
                    title="Entertainment and enjoyment"
                        content="We collectively enjoy ourselves and consistently set aside time to commemorate our achievements."
                />
                </div>
            </div>

            <div class="content3-t">
                <div className="left-content3">
                    <img className="octagon-shape-clip-6" alt="Octagon shape clip" src="\images\octogon.png" />
                    <img className="overlapimage" alt="Octagon shape clip" src="\images\img-team4.png" />
                </div>

                <div className="right-content3">
                    <h1 class="head-product"> <span className="blue-text1-t"> Join Our Team at Quantechs </span> </h1>
                    <p >
                        We're on the lookout for passionate individuals with expertise in development, quality assurance, and support.
                        Whether you're a seasoned pro or a rising star, if you're fueled by a love for technology and dedicated to crafting
                        exceptional solutions, we're eager to connect with you. Your journey with Quantechs awaits!
                    </p>
                    <a href="/ContactUs"><button className="btn-team"> Contact Us </button></a>
                </div>
            </div>

            <div className="teampics-t">
                <div className="team-topic-t"><span className="blue-text">Living Our Culture at Quantechs </span></div>
                <p>
                    We hold in high regard their dedication to constructing exceptional technology solutions and the deep pride
                    they hold in playing a pivotal role in enhancing our clients' software applications.
                </p>
                <img className="teamimage1-t" src=" \images\t4.png" alt="team Image" />
                <img className="teamimage2-t" src=" \images\t2.png" alt="team Image" />
                <img className="teamimage4-t" src=" \images\t1.png" alt="team Image" />
                <img className="teamimage5-t" src=" \images\t5.png" alt="team Image" />
                <img className="teamimage3-t" src=" \images\t3.png" alt="team Image" />
            </div>


        </div>
    );
}

export default OurTeam;
