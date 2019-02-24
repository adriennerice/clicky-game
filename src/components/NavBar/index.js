import React from "react";
import "./style.css";


function NavBar(props) {
  return (
    <nav className="navBarTop navbar-expand-lg navbar-light">
        <ul>
          <li>
            <a href="/">Clicky Game</a>
          </li>
          <li> 
            {props.message}
          </li>
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
    </nav>
    
  )
}

export default NavBar;