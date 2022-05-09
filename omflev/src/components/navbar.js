import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import logo from "../styles/logo.png"
import Clock from 'react-live-clock';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' alt="logo" src={logo} />
            <div className='menu' style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
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
            <div className='timer' style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <AccessTimeIcon />
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC/GMT'} />
            </div>
            <div className='settings' style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
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
export default navbar;