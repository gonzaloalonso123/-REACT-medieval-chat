import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export default class DbAccess {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDOoHbI_IXJJF_nMspVrnYvbWV5lM-K4QY",
      authDomain: "chat-medieval.firebaseapp.com",
      projectId: "chat-medieval",
      storageBucket: "chat-medieval.appspot.com",
      messagingSenderId: "775706723051",
      appId: "1:775706723051:web:29cf63cedaa78c2ac8b4ae",
      measurementId: "G-S8MEHQNST2",
    };

    let app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  getDb() {
    return this.db;
  }

  async writeMessage(user, message, date) {
    const chat1Ref = doc(this.db, "mensajes", "chat1");
    await updateDoc(chat1Ref, {
      mensajes: arrayUnion({
        usuario: user,
        mensaje: message,
        hora: date,
      }),
    });
  }
}
