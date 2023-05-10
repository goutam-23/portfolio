import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"


export default function headerSocials(){
    return(
        <>
            <div className="header__social">
                <a href="https://www.linkedin.com/in/goutam-sahu-247579210/" target="_blank"><BsLinkedin/></a>
                <a href="https://www.facebook.com/goutam.sahu.3367" target="_blank"><BsFacebook/></a>
                <a href="https://www.instagram.com/_mr_goutam23_/" target="_blank"><FiInstagram/></a>
            </div>
        </>
    )
}