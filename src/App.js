import "./App.css";
import Chat from "./components/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/chat' element = {<Chat user = {user}/>}/>
          <Route path = '/' element = {<Login setUser = {setUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
