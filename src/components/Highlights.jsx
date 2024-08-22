import React from "react"
import { Link } from "react-router-dom";

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

function LinkButton(props) {
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
          <LinkButton
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
                <span> <Link to={"/blog/"+props.slug}>{props.title}</Link> </span>
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
                        slug = {highlight.slug}
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
                    <Link to={"/blog?tags="+props.tag}>
                        <button formAction={"/blog?tags="+props.tag}>
                            all {props.tag_alias.toLowerCase()}
                        </button>
                    </Link>
                </div>
                
                {highlights}
            </div>
        )
}

export { Highlights, LinkButton }