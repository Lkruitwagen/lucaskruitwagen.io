import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons'

function BusinessCard(props) {

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

function LinkSvg(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
                <g data-name="external-link">
                    <rect width="24" height="24" opacity="0">    </rect>
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
                </g>
            </g>
        </svg>
    )
}

function Link(props) {
    return (
        <form target="_blank">
            <button formAction={props.url}>
                {props.label} {props.external ? <LinkSvg /> : null}
            </button>
        </form>
    )
}

function Highlight(props) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const links = props.links.map((link) => {
        return (
          <Link 
            key={link.label}
            label = {link.label}
            url = {link.url}
            external = {link.external}
          />
        )
      })

    return (
        <div className="highlight">
            <div className="highlight--title">
                <span> {props.title} </span>
                <p>
                    {months[props.date.getMonth()] + " " + props.date.getFullYear()}
                </p>
            </div>
            <div className="highlight--links">
                {props.show_links ? links : null}
            </div>
        </div>
    )
}

function Highlights(props) {
    
        const highlights = props.highlights?.filter((highlight) => (highlight.highlight && highlight.tags.includes(props.tag))).map((highlight) => {
                return (
                    <Highlight 
                        key = {highlight.title}
                        title = {highlight.title}
                        date = {highlight.date}
                        links = {highlight.links}
                        show_links = {props.show_links}
                    />
                )

        })
    
        return (
            <div className="highlights">
                <div className="highlights--header">
                    <span> {props.tag_alias} </span>
                    <form>
                        <button formAction={"/blog?"+props.tag}>
                            all {props.tag_alias.toLowerCase()}
                        </button>
                    </form>
                </div>
                
                {highlights}
            </div>
        )
}

export {
    BusinessCard,
    Highlights
}