import React, { useState } from "react";
import { Dialog } from "@reach/dialog";

import AuthForm from "../components/AuthForm";
import { Logo } from "../components/Logo";
import "@reach/dialog/styles.css";

const AuthPage = () => {
  const [openModal, setOpenModal] = useState("none");

  const login = (formData) => {
    console.log("login", formData);
  };

  const register = (formData) => {
    console.log("register", formData);
  };
  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal("login")}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal("register")}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <div>
          <button onClick={() => setOpenModal("none")}>Close</button>
        </div>
        <h3>Login</h3>
        <AuthForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === "register"}>
        <div>
          <button onClick={() => setOpenModal("none")}>Close</button>
        </div>
        <h3>Register</h3>
        <AuthForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </>
  );
};

export default AuthPage;
