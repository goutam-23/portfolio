import React from "react";
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineInstagram} from "react-icons/ai"
import {MdWhatsapp} from "react-icons/md"
import  {useRef} from 'react';
import emailjs from 'emailjs-com';
// import ReactWhatsapp, { ReactWhatsappProps } from "react-whatsapp";

export default function Contact(){
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_95lvmta', 'template_lsl3903', form.current, '8ZBQo_mFF_2M1zQzR')
        e.target.reset()
      };
    return(
        <>
            <section id="contact">
                <h5 className="hi">Get In Touch</h5>
                <h2 className="hi">contact me</h2>
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__option-icon"/>
                            <h4>Email</h4>
                            <h5>goutamsahu602@gmail.com</h5>
                            <a href="mailto:goutamsahu602@gmail.com"rel="noreferrer" target="_blank">Send a message</a>
                        </article>

                        <article className="contact__option">
                            <AiOutlineInstagram className="contact__option-icon"/>
                            <h4>Instagram</h4>
                            <h5>_mr_goutam23_</h5>
                            <a href="https://www.instagram.com/_mr_goutam23_/" rel="noreferrer"target="_blank">Send a message</a>
                        </article>

                        <article className="contact__option">
                            <MdWhatsapp className="contact__option-icon"/>
                            <h4>WhatsApp</h4>
                            <h5>Goutam Sahu</h5>
                            <a href="https://api.whatsapp.com/send/?phone=919078774040" rel="noreferrer"target="_blank">Send a message</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name"placeholder="Enter Full Name"required/>
                        <input type="email" name="email"placeholder="Enter your Email-ID"required/>
                        <textarea name="message" rows="7" placeholder="Your Message.." required/>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}