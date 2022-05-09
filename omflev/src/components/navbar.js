import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import logo from "../styles/logo.png"
import Clock from 'react-live-clock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' alt="logo" src={logo} />
            <li>
                <Link to="/stories">Stories</Link>
            </li>
            <li>
                <Link to="/draaiboeken">Draaiboeken</Link>
            </li>
            <li>
                <Link to="/media">Media</Link>
            </li>
            <div className='timer' style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <AccessTimeIcon />
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC/GMT +2 hours'} />
            </div>
            
        </div>
    );
}
export default navbar;