import React, {useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Header() {
    const [value, setValue] = useState("")


    function submitfunc(e) {
        e.preventDefault()
        setValue("")
    }

    return (
        <header className="header">
            <div className="header-cont">
                <div className="logo">
                    <h2 className="logotext">Movie</h2>
                </div>
                <form onSubmit={submitfunc} action="">
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
                    <Link to={`/search/${value}`}><button type="submit">Search</button></Link>
                </form>
            </div>
        </header>
    )
}

export default Header