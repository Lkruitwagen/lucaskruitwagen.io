import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

export default class CodeCard extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {stars: null};

      }

    componentDidMount() {
        fetch("https://api.github.com/repos/"+this.props.org+"/"+this.props.repo)
        .then((res) => {
            if (!res.ok) {
                throw Error(res);
            }
            return (
                res.json()
            )
        })
        .then(
            (blob) => {
                this.setState({stars: blob.stargazers_count})
            }
        )
        .catch(
            (error) => {
                this.setState({stars: '000'})
                console.log('error',error)
            }
        )
    }

    render() {
    
        return (
            <form target="_blank">
                <button className="codecard" formAction={"https://github.com/"+this.props.org+"/"+this.props.repo}>
                    <div className="codecard--content">
                        <div className="codecard--detail">
                            <span>
                                {this.props.year}
                            </span>
                            <div className="codecard--icon codecard--star">
                                <p>
                                    {this.state.stars}
                                </p>
                                <FontAwesomeIcon className="icon"  icon={faStar} size='1x'/>
                            </div>
                        </div>
                        <div className="codecard--title">
                            <span>
                                {this.props.title}
                            </span>
                        </div>
                        <div className="codecard--desc">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                    <div className="codecard--content">
                        <div className="codecard--detail">
                            <div className="codecard--icon">
                                <FontAwesomeIcon className="icon"  icon={faGithub} size='1x'/>
                                <p> {this.props.org} </p>
                            </div>
                            <div className="codecard--icon">
                                <FontAwesomeIcon className="icon"  icon={faCodeMerge} size='1x'/>
                                <p> {this.props.repo} </p>
                            </div>
                        </div>
                    </div>
                    

                </button>
            </form>
            
        )
    }
}