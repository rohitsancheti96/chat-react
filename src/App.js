import React from "react";
import "./style.css";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/sendMessageForm";
import NewRoomForm from "./components/NewRoomForm";

function App() {
  return (
    <div className="app">
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
    </div>
  );
}

export default App;
