import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
        this.state = {isDark: prefersDark};

        this.darkToggle = this.darkToggle.bind(this);

        this.handleDark(prefersDark);
    }

    handleDark(isDark) {
        let img_srcs = [
            "lk-img",
            "ac-logo",
            "ms-logo",
            "ox-logo",
            "bp-logo",
            "pm-logo"
        ]       
            
        
        if (isDark) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");

            for (let img_src of img_srcs) {
                let img_ob = document.getElementById(img_src)
                if (img_ob !== null) {
                    img_ob.src = img_ob.src.replace('light','dark');
                }
            }
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            for (let img_src of img_srcs) {
                let img_ob = document.getElementById(img_src)
                if (img_ob !== null) {
                    img_ob.src = img_ob.src.replace('dark','light');
                }
            }
        }
    }


    darkToggle() {
        this.handleDark(!this.state.isDark);
        this.setState({isDark: !this.state.isDark});
    }  

    render() {
        return (
            <nav>
                <Link to="/">
                    <span> Lucas Kruitwagen</span>
                </Link>
                    
                <div className="nav--full">
                    <ul>
                        <li><Link to="/blog">writing</Link></li>
                        <li><Link to="/speaking">speaking</Link></li>
                        <li><Link to="/code">open source</Link></li>
                        <li><Link to="/about">about</Link></li>
                    </ul>
                    <button className="dark--button" onClick={this.darkToggle}>
                        {this.state.isDark ? <img src="/sun.svg" /> : <img src="/moon.svg" />}
                    </button>
                </div>
                <div className="nav--dropdown">
                    <button className="dropbtn">
                        <FontAwesomeIcon icon={faBars} size="xl"/>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/blog">writing</Link>
                        <Link to="/speaking">speaking</Link>
                        <Link to="/code">open source</Link>
                        <Link to="/about">about</Link>
                    </div>
                </div>
            </nav>
        )
    }
}