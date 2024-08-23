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
                <div style={{color:"red"}} className="logo">
                    <Link to={`/`}><h1 className="logotext">Movie</h1></Link>
                </div>
                <form onSubmit={submitfunc}>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
                    <Link to={`/search/${value}`}><button>Search</button></Link>
                </form>
            </div>
        </header>
    )
}

export default Header