import React from "react";
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"


export default function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <img src={IMG1} className="portfolio__item-image"/>

                    <h3>Personal Portfolio</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <img src={IMG2} className="portfolio__item-image"/>

                    <h3>To-Do App</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/goutam-23/Reminder-app" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <img src={IMG3} className="portfolio__item-image"/>

                    <h3>Web Based Examination System</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                
            </div>
        </section >
    )
}