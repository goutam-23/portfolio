import React from "react";
import './footer.css'
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {AiFillLinkedin} from "react-icons/ai"

export default function Footer(){
    return(
        <footer>
            <a href="#" className="footer__logo">Goutam Sahu</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/goutam.sahu.3367"target="_blank"><FaFacebook/></a>
                <a href="https://www.instagram.com/_mr_goutam23_/"target="_blank"><FiInstagram/></a>
                <a href="https://www.linkedin.com/in/goutam-sahu-247579210/" target="_blank"><AiFillLinkedin/></a>
            </div>
        </footer>
    )
}