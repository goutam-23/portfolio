import React from "react";
import './services.css'
import { BsFillPatchCheckFill } from "react-icons/bs";


export default function Services(){
    return(
        <>
            <section id="services">
                <h1 className="hh">Courses That i have done</h1>
                <h1 className="hhh">Courses That i have done</h1>
                <div className="container services__container">
                    <article className="service">
                        <div className="service__head">
                            <a href="https://trainings.internshala.com/verify-certificate/?certificate_number=32687FF4-1376-7E8F-4ED2-C767D2BC2B8A" target="_blank">Python Programming</a>
                        </div>

                        <ul className="service__list">
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Python basics.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Object-oriented programming.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Data analysis and visualization.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Project-based learning.</p>
                            
                            </li>
                        </ul>
                    </article>


                    <article className="service">
                        <div className="service__head">
                        <a href="https://trainings.internshala.com/verify-certificate/?certificate_number=5C1D00BE-B352-7A23-BE94-A309637B15C0" target="_blank">Web Development</a>

                        </div>

                        <ul className="service__list">
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>HTML and CSS.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>JavaScript.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Bootstrap.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Server-side programming :: Php and MySql</p>
                            
                            </li>
                        </ul>
                    </article>



                    <article className="service">
                        <div className="service__head">
                        <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS91S3307010310190507" target="_blank">Database Management System</a>
                        </div>

                        <ul className="service__list">
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Database design.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Structured Query Language (SQL).</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Normalization.</p>
                            
                            </li>
                            <li>
                            <BsFillPatchCheckFill className="service__list-icon" />
                            <p>Database administration.</p>
                            
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}