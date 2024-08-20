import React from "react"
import { Link } from "react-router-dom";
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
                <div id="photo--border">
                    <img id="lk-img" src="/psychadelic-lk-green-light.png"/>
                </div>
                <div className="introduction introduction--col"> 
                    <span> About me. </span>
                    <p>
                        I'm a technical founder with domain expertise in energy systems, weather, and climate.
                        My technical edges are in machine learning, especially with earth observation and weather data; 
                        numerical optimisation, particularly mixed integer linear programming;
                        and in software engineering and technical leadership.
                    </p>
                    <p>
                        Most recently I was the CTO of <a href="https://www.transitionzero.org/">TransitionZero</a>, a climate-tech not-for-profit. 
                        I led a 20-person engineering team, comprised of front-end and back-end developers, data engineers, and machine learning engineers.
                        We built a platform for energy systems modelling - the numerical analysis tooling that provides projections of the energy system, 
                        used in everything from motivating new investment decisions to designing net-zero emissions grids.
                    </p>
                </div>
            </div>
            <div className="introduction">
                <p>
                    Prior to TransitionZero, I was the technical founder of Oxford Earth Observation (OxEO), now <a href="https://www.wtrmrq.com/">Watermarq</a>.
                    OxEO was founded at a water risk company using satellite data and computational hydrology to predict water scarcity.
                    I was also a researcher and project leader with the <a href="https://fdleurope.org/">Frontier Development Lab</a>, an ESA-funded EO+ML research lab.
                    I did my DPhil in Economic Geography at the University of Oxford, where I held affiliations with the <a href="https://www.smithschool.ox.ac.uk/">Smith School of Enterprise and the Environment</a>,
                    the <a href="https://www.inet.ox.ac.uk/">Institute for New Economic Thinking</a>, and the <a href="https://www.smithschool.ox.ac.uk/oxford-sustainable-finance-group/research/sustainable-finance">Sustainable Finance Group</a>.
                    I started my career as a mechanical engineer, working on the design and delivery of building energy systems and integrated renewables.
                </p>
                <span> Profile </span>
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
                            HTML; CSS; JS; React; Figma
                        </p>
                    </div>
                    <p>
                        My CV can be found <a href="/lk_cv_2024.pdf">here</a>.
                    </p>
            </div>
            
        </div>
    );
  }


const BusinessCardHome = () => {

    console.log('classes',document.body.classList)

    const img_src = "/psychadelic-lk-green.png"

    return (
        <div className="two--col">
            <div>
                <div id="photo--border">
                    <img id="lk-img" src="/psychadelic-lk-green-light.png"/>
                </div>
            </div>
            <div className="introduction introduction--col"> 
                <span> Hi! I'm Lucas. </span>
                <p>
                    I’m a climate-tech leader who builds software and datasets to support the energy transition. 
                    I care about a sustainable climate future, equitably enjoyed. 
                    I’m  building open, accessible tools to help get us there.
                </p>
                <p>
                    This is my personal site - a precis of my <Link to="/blog?tags=research">research</Link>, <Link to="/blog?tags=technical">technical</Link>, and <Link to="/blog?tags=personal">personal</Link> writing;  
                    <Link to="/speaking"> speaking and teaching engagements</Link>; and my <Link to="/code">open source contributions</Link>. 
                    If you want to chat about something, <a href="mailto:hello@lucaskruitwagen.io">get in touch!</a> Or follow along:
                </p>
                <div id="socials--container">
                    <a href="https://github.com/Lkruitwagen"><FontAwesomeIcon className="icon"  icon={faGithub} size='2x'/></a>
                    <a href="https://www.linkedin.com/in/lucaskruitwagen/"><FontAwesomeIcon className="icon" icon={faLinkedin} size='2x'/></a>
                    <a href="https://twitter.com/LucasKruitwagen"><FontAwesomeIcon className="icon" icon={faTwitter} size='2x'/></a>
                    <a href="https://scholar.google.com/citations?user=Jw0EwYEAAAAJ&hl=en"><FontAwesomeIcon className="icon" icon={faGoogleScholar} size='2x'/></a>
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