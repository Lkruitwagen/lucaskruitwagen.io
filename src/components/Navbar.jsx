import React from "react"
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const [isDark, setIsDark] = React.useState(false)

    function darkToggle() {
        setIsDark(prevDark => (!prevDark));
    }

    React.useEffect(() => {

        let img_src = document.getElementById("lk-img")
        
        if (isDark) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            if (img_src !== null) {
                img_src.src = "/psychadelic-lk-green-dark.png";
            }
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            if (img_src !== null) {
                img_src.src = "/psychadelic-lk-green.png";
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