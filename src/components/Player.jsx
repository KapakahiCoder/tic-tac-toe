import { useState } from "react";

export default function Player(props) {
  const [playerName, setPlayerName] = useState(props.initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler() {
    setIsEditing((editing) => !editing);
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={changeHandler} />
    );
    btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={editClickHandler}>{btnCaption}</button>
    </li>
  );
}
