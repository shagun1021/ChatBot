import React, { useEffect } from "react";
import Chat from "./Chat";
import Cookies from "js-cookie";

const Home = () => {
  useEffect(() => {
    const token = Cookies.get("auth_token");
    console.log(token, "---");
  }, []);

  return (
    
      <Chat />
      
    
  );
};

export default Home;
