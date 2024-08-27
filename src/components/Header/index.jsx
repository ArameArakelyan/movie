import React, {useState } from "react";
import "../../App.css"
import { Link, useNavigate } from "react-router-dom";
import { ganre } from "../../lib";

function Header() {
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    function onSubmit(e) {
        e.preventDefault()
        e.stopPropagation();
        setValue("")
        navigate(`/search/${value}`)
    }

    const [show, setShow]= useState(false)
    function showMenu(e) {
        setShow(!show)
    }
    return (
        <header className="header">
            <div className="header-cont">
                <div style={{padding:"10px 0"}} className="logo">
                    <Link style={{textDecoration:"none", color:"#f5c518"}} to={`/`}><h1 className="logotext">MovieHD</h1></Link>
                </div>

                <div className="menu" onClick={showMenu}>
                <ion-icon name="menu"></ion-icon>
                    <h2 >
                        Menu
                    </h2>
                    <div className="ganres_menu" style={{display:show?"block":"none"}}>
                        <p>Ganres</p>
                        <div>{ganre.map((el)=>{
                            return(
                                <Link  to={`/ganres/${el.id}`} className="ganreLink" key={el.id}>{el.name}</Link>
                            )
                        })}</div>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <input className="inp" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
                    <button className="btn">Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header