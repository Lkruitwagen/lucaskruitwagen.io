import React from "react"
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDark, setIsDark] = React.useState(prefersDark)

    console.log('isDark', isDark)

    function darkToggle() {
        setIsDark(prevDark => (!prevDark));
    }

    React.useEffect(() => {

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

    }, [isDark])

    return (
        <nav>
            <Link to="/">
                <span> Lucas Kruitwagen</span>
            </Link>
                
            <div>
                <ul>
                    <li><a href="/blog">writing</a></li>
                    <li><a href="/speaking">speaking</a></li>
                    <li><a href="/code">open source</a></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
                <button className="dark--button" onClick={darkToggle}>
                    {isDark ? <img src="/sun.svg" /> : <img src="/moon.svg" />}
                </button>
            </div>
        </nav>
    )
}