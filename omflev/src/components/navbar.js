import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
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