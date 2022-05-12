import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";

import logo from "../styles/logo.png"
import Clock from 'react-live-clock';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {

    const [ToggleMenu, setToggleMenu] = useState(false);
    const ToggleNav = () => {
        setToggleMenu(!ToggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

    }, [])

    return (
        <div className='navbar'>
            <img className='logo' alt="logo" src={logo} />

            <div className='menu'>
                {(ToggleMenu || screenWidth > 500) && (
                    <ul>
                        <li>
                            <Link to="/stories">Stories</Link>
                        </li>
                        <li>
                            <Link to="/draaiboeken">Draaiboeken</Link>
                        </li>
                        <li>
                            <Link to="/media">Media</Link>
                        </li>
                    </ul>
                )}

                <button onClick={ToggleNav} className="btn">BTN</button>
            </div>

            <div className='timer'>
                <AccessTimeIcon />
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC/GMT'} />
            </div>
            <div className='settings'>
                <li>
                    <Link to="/#"><QuestionMarkIcon /></Link>
                </li>
                <li>
                    <Link to="/#"><GridViewIcon /></Link>
                </li>
                <li>
                    <Link to="/#"><CreateIcon /></Link>
                </li>
                <li>
                    <Link to="/#"><AccountCircleIcon /></Link>
                </li>
            </div>
        </div>
    );
}

export default Navbar;