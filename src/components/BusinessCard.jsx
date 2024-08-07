import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons'

export default function BusinessCard(props) {

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
    )
}