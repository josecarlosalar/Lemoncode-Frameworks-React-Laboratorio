import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { ProfileContext } from "@/core/profile";
import { LoginComponent } from "./login.component";
import { doLogin } from "./api/login.api";

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = React.useContext(ProfileContext);

  const handleLogin = (username: string, password: string) => {
    const organizacion = "Lemoncode";
    doLogin(username, password).then((success) => {
      if (success) {
        setUserProfile({ userName: username });
        navigate(routes.list(organizacion));
       } else {
        alert("User / password not valid, psst... admin / test");
      }
      
    });
    
  };
  return (<LoginComponent onLogin={handleLogin}/>);
};
