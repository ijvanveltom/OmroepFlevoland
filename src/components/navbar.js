import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

import logo from "../logo.svg"
import Clock from 'react-live-clock';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to="/">
                <img className='logo' alt="logo" src={logo} />
            </NavLink>

            <nav className='menu'>
                <ul>
                    <li>
                        <NavLink to="/stories" className={({ isActive }) => "nav-link" + (isActive ? " activeMenu" : "")}>Stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/draaiboeken" className={({ isActive }) => "nav-link" + (isActive ? " activeMenu" : "")}>Draaiboeken</NavLink>
                    </li>
                    <li>
                        <NavLink to="/media" className={({ isActive }) => "nav-link" + (isActive ? " activeMenu" : "")}>Media</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='timer'>
                <AccessTimeIcon />&nbsp;<Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
            </div>

            
            <div className='settings'>
                <li>
                    <Link to="/#"><QuestionMarkIcon /></Link>
                </li>
                <li>
                    <Link to="/#"><GridViewIcon /></Link>
                </li>
                <li>
                    <Link to="/#"><AccountCircleIcon /></Link>
                </li>
            </div>
        </div>
    );
}

export default Navbar;