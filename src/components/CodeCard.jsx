import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

export default function CodeCard(props) {

    const [stars, setStars] = React.useState(null);

    React.useEffect(() => {
        async function getStars() {
            const res = await fetch("https://api.github.com/repos/"+props.org+"/"+props.repo)
            const data = await res.json()
            setStars(data.stargazers_count)
        }
        getStars()
    }, [setStars])

    return (
        <form target="_blank">
            <button className="codecard" formAction={"https://github.com/"+props.org+"/"+props.repo}>
                <div className="codecard--content">
                    <div className="codecard--detail">
                        <span>
                            {props.year}
                        </span>
                        <div className="codecard--icon codecard--star">
                            <p>
                                {stars}
                            </p>
                            <FontAwesomeIcon className="icon"  icon={faStar} size='1x'/>
                        </div>
                    </div>
                    <div className="codecard--title">
                        <span>
                            {props.title}
                        </span>
                    </div>
                    <div className="codecard--desc">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className="codecard--content">
                    <div className="codecard--detail">
                        <div className="codecard--icon">
                            <FontAwesomeIcon className="icon"  icon={faGithub} size='1x'/>
                            <p> {props.org} </p>
                        </div>
                        <div className="codecard--icon">
                            <FontAwesomeIcon className="icon"  icon={faCodeMerge} size='1x'/>
                            <p> {props.repo} </p>
                        </div>
                    </div>
                </div>
                

            </button>
        </form>
        
    )
}