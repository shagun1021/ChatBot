import React, { useState } from "react";
import goBtn from "../src/assets/go.png";
import axios from "axios";
import Cookies from "js-cookie";
import botImg from "../src/assets/chatbot.png"

const Chat = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [response, setResponse] = useState("");

  const newChat=()=>{
    setConversation([])
   }
   const logout = () => {
    Cookies.remove("auth_token");
    window.location.href = "/";   
  };
  const go = async () => {
    const token = Cookies.get("auth_token");
    
    

    if (message.trim() !== "") {
      let res;
      await axios
        .post(
          "http://localhost:9999/post",
          {
            message: message,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          res = response.data.botResponse;
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
      setConversation([...conversation, { user: message, response: res }]);
      setMessage("");
    }

    
  };

  return (
    <div className="main">
    <div className="chat">
      {conversation.length === 0 ? (
        <div className="wave-container">
          <div className="text">Hello</div>
          <div className="hand">👋</div>
          <div className="text">! How Can I Help You Today?</div>
        </div>
      ) : (
        <div className="convers">
          <div className="conv">
            {conversation.map((msg, index) => (
              <div key={index}>
                <div className="user">{msg.user}</div>
                <div className="res">{msg.response}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="newChat">
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type a message ..."
          onKeyPress={(e) => e.key === "Enter" && go()}
        />
        <span>
          <img src={goBtn} alt="go" onClick={go} />
        </span>
      </div>
    </div>
   
    <div className="history">
      <img src={botImg} alt="" />
      <div>
        <div class="container">
          <input
            type="text"
            name="text"
            class="input"
            placeholder="Search..."
          />
          <button class="search__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                fill="#efeff1"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="historyFooter">
        <button className="newchat" onClick={newChat}>New Chat</button>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
    </div>
    </div>
  );
};

export default Chat;
