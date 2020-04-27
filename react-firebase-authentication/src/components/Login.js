import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./FireConfig.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        <Redirect to="/" />;
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
      <div style={{textAlign: 'center', justifyContent: 'center'}}>
      <h1>Log in</h1>
      <form onSubmit={handleLogin} style={{textAlign: 'center', display: 'flex', flexDirection:'column', margin: 15}}>
        <label style={{margin: 5, padding: 5}}>
          Email:
          <input style={{marginLeft: 5}} name="email" type="email" placeholder="Email" />
        </label>
        <label style={{margin: 5, padding: 5}}>
          Password:
          <input style={{marginLeft: 5}} name="password" type="password" placeholder="Password" />
        </label>
      </form>
      <button style={{border: "1px solid #D3D3D3", borderRadius: 3, padding: 5}} type="btn">Sign Up</button>
    </div>
  );
};

export default withRouter(Login);