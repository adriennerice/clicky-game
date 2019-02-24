import React from "react";
import "./style.css";

// Update Cards section as props/state
function MemoryCard(props) {
  return (
    <div className="card"
      onClick={() => props.handleClick(props.id)}>
        <span>  
            <div className="img-container">
               <img 
                alt={props.name} 
                src={props.image} />
            </div>
        </span>
    </div>
  );
}

export default MemoryCard;

// onClick={() => props.removeFriend(props.id)} className="remove"