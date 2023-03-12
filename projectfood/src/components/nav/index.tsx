import React from "react";
import "./index.css";

interface NavProps{}

const Nav: React.FC<NavProps> = (props) => {
    const {} = props;

    return (

        <nav>
                <a href="#" className="logo">PROJECT FOOD</a>
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">MENU</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul> 
        </nav>

    )
}

export default Nav;