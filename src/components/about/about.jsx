import React from "react";
import './about.css'
import Me3 from "../../assets/me3.jpg"
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

export default function About() {
    return (
        <>
            <section id="about">
                <h5 className="hg">Get to Know </h5>
                <h2 className="hg2">About Me</h2>

                <div className="container about_container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={Me3} alt="about image"></img>
                        </div>

                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Experience</h5>
                                <small>Fresher</small>
                            </article>



                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>3 Projects</small>
                            </article>
                        </div>
                        <p>
                            Hello, my name is Goutam Sahu and I have completed my Bachelor's degree in Computer Science and Engineering from NIST in 2023. During my studies,
                            I gained a solid foundation in computer programming. Additionally,
                             I pursued my passion for web development and honed my
                             skills in front-end and back-end technologies,
                            including HTML, CSS, JavaScript, React, and MongoDB. As a developer, 
                            I am passionate about creating responsive, user-friendly, and visually appealing websites
                             that are optimized for performance and SEO. I enjoy collaborating with
                            teams and learning from my peers to develop innovative solutions to complex problems.
                        </p>
                        <a href="#contact" className="btn btn-primary abt_btn">lets talk</a>
                    </div>
                </div>
            </section>
        </>
    )
}