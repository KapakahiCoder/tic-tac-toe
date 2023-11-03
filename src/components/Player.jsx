import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <div>
            <span className="player-name">{props.name}</span>
          </div>
        ) : (
          <input type="text" required />
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={editClickHandler}>Edit</button>
    </li>
  );
}
