import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import DbAccess from "../database-access/db-access";

function SendText({user}) {
  const [input, setInput] = useState("");
  const database = new DbAccess();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const enviar = () => {
    let date = new Date();
    console.log(user);
    let dateToString = `${date.getHours()}:${date.getMinutes()}`
    database.writeMessage(user, input, dateToString);
  };

  return (
    <div className="send-text">
      <input className="input" onChange={handleInput} />
      <button className="send-button" onClick={enviar}>
        <BiSend />
      </button>
    </div>
  );
}

export default SendText;
