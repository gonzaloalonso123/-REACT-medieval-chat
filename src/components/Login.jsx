import React from "react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Images from "../images/images";
import "./Chat.css";

function Login({ setUser }) {
  const [selected, setSelected] = useState(-1);
  const [input, setInput] = useState("");
  const nav = useNavigate();

  const handleInput = (event) => {
    setInput(event.target.value);
    // poner en la variable de state input 
    // el contenido de la caja de texto
  };

  const register = () => {
    const user = {
      user: input,
      image : Images[selected]
    };
    setUser(user);
    nav('/chat');
  };

  return (
    <div className="login-page">
      <h1>Selecciona tu nombre</h1>
      <input className="input" onChange={handleInput} />
      <h1>Selecciona tu avatar</h1>
      <div className="image-selector">
        {Images.map((image, key) => {
          return (
            <img
              src={image}
              className={key == selected ? "active" : ""}
              onClick={() => setSelected(key)}
              alt=""
            />
          );
        })}
      </div>
      <button className="login-button" onClick={register}>
        Entrar
      </button>
    </div>
  );
}

export default Login;
