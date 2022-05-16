import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

import logo from "../styles/logo.png"
import Clock from 'react-live-clock';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <div className='navbar'>
            <a href='/home'>
                <img className='logo' alt="logo" src={logo} />
            </a>

            <div className='menu'>
                <ul>
                    <li>
                        <NavLink to="/stories">Stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/draaiboeken">Draaiboeken</NavLink>
                    </li>
                    <li>
                        <NavLink to="/media">Media</NavLink>
                    </li>
                </ul>
            </div>

            <div className='timer'>
                <AccessTimeIcon />
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
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