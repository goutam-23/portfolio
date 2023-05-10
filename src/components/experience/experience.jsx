import React from "react";
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Experience() {
    return (
        <>
            <section id="experience">
                <h5>The Skills I have</h5>
                <h1>My Experience</h1>

                <div className="container experience__container">
                    <div className="experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Css</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>React.Js</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>
                        </div>
                    </div>
                    <div className="experience__Backend">
                        <h3>Backend Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Node.Js</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Express.Js</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>MongoDb</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>

                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Php</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}