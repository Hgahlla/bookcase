/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";

import { Input } from "./FormElements";
import Spinner from "./Spinner";

const AuthForm = ({ onSubmit, submitButton }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <form
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        "> div": {
          margin: "10px auto",
          width: "100%",
          maxWidth: "300px",
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>
        {React.cloneElement(submitButton, { type: "submit" })}
        {/* <Spinner css={{ marginLeft: 5 }} /> */}
      </div>
    </form>
  );
};

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

export default AuthForm;
