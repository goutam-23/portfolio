import React from "react";
import './header.css'
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from "../header/headerSocials"

export default function Header() {
    return (
        <header>
            <div className="header_container">
                <h5>Hello I'm</h5>
                <h1>Goutam Sahu</h1>
                <h3>Front-End Developer</h3>

                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="ME"></img>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}