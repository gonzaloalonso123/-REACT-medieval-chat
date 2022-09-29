import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DbAccess from "../database-access/db-access";
import "./Chat.css";
import Mensaje from "./Mensaje";
import SendText from "./SendText";
import { doc, onSnapshot } from "firebase/firestore";

function Chat({ user }) {
  const [mensajes, setMensajes] = useState([]);
  const database = new DbAccess();
  const db = database.getDb();

  useEffect(() => {
    onSnapshot(doc(db, "mensajes", "chat1"), (doc) => {
      setMensajes(doc.data().mensajes);
    });
  }, []);

  return (
    <div className="chat">
      <div className="all-messages">
        {mensajes.map((mensaje, key) => {
          return (
            <Mensaje
              message={mensaje.mensaje}
              user={mensaje.usuario}
              hour={mensaje.hora}
              enviado={mensaje.usuario === user.user ? true : false}
              key={key}
            />
          );
        })}
      </div>
      <SendText user={user.user} />
    </div>
  );
}

export default Chat;
