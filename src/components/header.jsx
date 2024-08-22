import React, { useContext, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { SearchContext } from "../use";

function Header() {
    const [value, setValue] = useState("")
    const {search, setSearch} = useContext(SearchContext)
    function submitfunc(e) {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(e.target.value);
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
                    <Link to={"/?search"}><button>Search</button></Link>
                </form>
            </div>
        </header>
    )
}

export default Header