////import logo from './logo.svg';
import './ContactUs.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {

    const form = useRef();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8twz1fq', 'template_smkyuqr', form.current, 'WTzYuco2xY_xOFESY')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                setIsFormSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    };

   
    return (
        <div className="App-c">

            <div className="topic2-c"> <span className="blue-text-c">Ready to build </span> your software?</div>
                    <div >
                        <div className="rectangle-c">

                        <div className="topic3-c"><span className="blue-text-c"> Get in touch with us !</span></div>
                        <p className="p1-c">Whether you  need assistance with development, quality assurance or support, Quantech can help.</p>
                    <p className="p2-c"> If you're interested in becoming a part of our dynamic team, we encourage you to reach out.</p>
                 
               

            </div>
        
            <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
              
         
 
                    <img className="img-0-c" alt="Image" src="\images\office-building.png" />
                    <img className="img-1-c" alt="Image" src="\images\telephone-call.png" />
                    <img className="img-2-c" alt="Image" src="\images\email.png" />

                    <span className="txt--ch-c">
                        Head Office
                        <br />
                    </span>
                    <span className="span-0-c">
                        6/1 Galpotta Road,
                        <br />
                        Nawala,
                        <br />
                        Sri Jayardenepura Kotte,
                        <br />
                        Sri Lanka
                    </span>
                    <span className="txt--ch1-c">
                        Hotline
                        <br />
                    </span>
                    <span className="span-1-c">
                        +94 112 805 307
                    </span>

                    <span className="txt--ch2-c">
                        Email at
                        <br />
                    </span>
                    <span className="span-2-c">
                        email@quantechs.com
                    </span>
                    </div>
       </div>
 
        </div>
    );
}

export default ContactUs;
