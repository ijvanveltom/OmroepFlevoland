import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const navbar = () => {
    return (
        <div className='navbar'>
            <li>
                <Link to="/stories">Stories</Link>
            </li>
            <li>
                <Link to="/draaiboeken">Draaiboeken</Link>
            </li>
            <li>
                <Link to="/media">Media</Link>
            </li>
        </div>
    );
}
export default navbar;