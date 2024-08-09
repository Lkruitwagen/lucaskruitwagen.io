import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BusinessCardAbout = () => {
    return (
        <div>
            <div className="two--col">
                <div className="introduction"> 
                    <span> About me. </span>
                    <div className="introduction--cv">
                        <div className="introduction--cv--top">
                            <span>
                                Tech Leadership
                            </span>
                            <div className="introduction--cv--stars">
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                            </div>
                        </div>
                        <p>
                            Fundraising (grants+venture); business modelling; recruitment; OKRs & management; tech culture; agile (professional scrum master).
                        </p>
                    </div>
                    <div className="introduction--cv">
                        <div className="introduction--cv--top">
                            <span>
                                Climate-Tech Research & Development
                            </span>
                            <div className="introduction--cv--stars">
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                            </div>
                        </div>
                        <p>
                            ML research (PyTorch+Lightning); MLOps (MLFlow, W&B); geospatial stack (postgis,STAC); HPC (xarray/zarr/dask); linear programming.
                        </p>
                    </div>
                    <div className="introduction--cv">
                        <div className="introduction--cv--top">
                            <span>
                                Back-End Development
                            </span>
                            <div className="introduction--cv--stars">
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                            </div>
                        </div>
                        <p>
                            Python; Progresql; FastAPI; GraphQL; Docker; GCP (BQ, GCS, Vertex, Build, Run); Orchestration (Dagsgter, Prefect); Dev/Data/CloudOps.
                        </p>
                    </div>
                    <div className="introduction--cv">
                        <div className="introduction--cv--top">
                            <span>
                                Front-End Development
                            </span>
                            <div className="introduction--cv--stars">
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='xs'/>
                            </div>
                        </div>
                        <p>
                            Figma; HTML; CSS; JS; React
                        </p>
                    </div>
                </div>
                <div id="photo--border">
                    <img id="lk-img" src="/psychadelic-lk.png"/>
                </div>
            </div>
            <div className="introduction">
                <p>
                    I'm a technical founder with domain expertise in energy systems, weather, and climate.
                    My technical edges are in machine learning, especially with earth observation and weather data; 
                    numerical optimisation, particularly mixed integer linear programming;
                    and in software engineering and technical leadership.
                </p>
                <p>
                    Most recently I was the CTO of TransitionZero, a climate-tech not-for-profit. 
                    I led a 20-person engineering team, comprised of front-end and back-end developers, data engineers, and machine learning engineers.
                    We built a platform for energy systems modelling - the numerical analysis tooling that provides projections of the energy system, 
                    used in everything from motivating new investment decisions to designing net-zero emissions grids.
                </p>
                <p>
                    Prior to TransitionZero, I was the technical founder of Oxford Earth Observation (OxEO), now Watermarq.
                    OxEO was founded at a water risk company using satellite data and computational hydrology to predict water scarcity.
                    I did my DPhil in Economic Geography at the University of Oxford, where I held affiliations with the Smith School of Enterprise and the Environment,
                    the Institute for New Economic Thinking, and the Sustainable Finance Group.
                    I started my career as a mechincal engineer, working on the design and delivery of building energy systems and integrated renewables.
                </p>
                <p>
                    My full CV can be found here.
                </p>
            </div>
        </div>
    );
  }


const BusinessCardHome = () => {
    return (
        <div className="two--col">
            <div className="introduction"> 
                <span> Hi! I'm Lucas. </span>
                <p>
                    I’m a climate-tech leader who builds software and datasets to support the energy transition. 
                    I care about a sustainable climate future, equitably enjoyed. 
                    I’m  building open, accessible tools to help get us there.
                </p>
                <p>
                    This is my personal site - a precis of my <a href="/writing">research</a>, <a href="/writing">technical</a>, and <a href="/writing">personal</a> writing;  
                    <a href="/speaking"> speaking and teaching engagements</a>; and my <a href="/code">open source contributions</a>. 
                    If you want to chat about something, <a href="mailto:hello@lucaskruitwagen.io">get in touch!</a> Or follow along:
                </p>
                <div id="socials--container">
                    <a href="https://github.com/Lkruitwagen"><FontAwesomeIcon className="icon"  icon={faGithub} size='2x'/></a>
                    <a href="https://www.linkedin.com/in/lucaskruitwagen/"><FontAwesomeIcon className="icon" icon={faLinkedin} size='2x'/></a>
                    <a href="https://twitter.com/LucasKruitwagen"><FontAwesomeIcon className="icon" icon={faTwitter} size='2x'/></a>
                    <a href="https://scholar.google.com/citations?user=Jw0EwYEAAAAJ&hl=en"><FontAwesomeIcon className="icon" icon={faGoogleScholar} size='2x'/></a>
                </div>
            </div>
            
            <div>
                <div id="photo--border">
                    <img id="lk-img" src="/psychadelic-lk.png"/>
                </div>
            </div>
        </div>
    );
  }

function BusinessCard(props) {

    return (
        <div>
            {props.is_about ? <BusinessCardAbout /> : <BusinessCardHome />}
        </div>
    )
}

export default BusinessCard