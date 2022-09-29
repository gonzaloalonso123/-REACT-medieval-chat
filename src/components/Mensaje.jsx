import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Mensaje({ user, message, enviado, image, hour }) {

  return (
    <div className={enviado ? "mensaje enviado" : "mensaje recibido"}>
      <div>
        <div className="mensaje-header">
          <h1 className="name">{user}</h1>&nbsp;&nbsp;
          <h1 className="date">
            {hour}
          </h1>
        </div>
        <div className="mensaje-mensaje">
          <label>{message}</label>
        </div>
      </div>
        <img src={image} />
    </div>
  );
}

export default Mensaje;
