import React from "react";

function Header() {
    return(
        <header className="header">
            <div className="logo">
                <h2 className="logotext">Movie</h2>
            </div>
            <form action="">
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
            </form>
            {/* <nav>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header