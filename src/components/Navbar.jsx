import React from "react"

export default function Navbar(props) {

    const [isDark, setIsDark] = React.useState(false)

    function darkToggle() {
        setIsDark(prevDark => (!prevDark));
    }

    console.log(isDark)

    React.useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

    }, [isDark])

    return (
        <nav>
            <div>
                <span> my travel journal.</span>
            </div>
            <button className="dark--button" onClick={darkToggle}>
                {isDark ? <img src="/sun.svg" /> : <img src="/moon.svg" />}
            </button>
        </nav>
    )
}