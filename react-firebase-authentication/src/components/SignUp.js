import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {withFirebase,app} from "./FireConfig";
import { Redirect } from "react-router-dom";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      redirectToLogin()
    }
    if(email === currentEmail){
      return(
        <Redirect to={"/login"} />
      )
    }
  }, [history]);

  return (
    <div style={{textAlign: 'center', justifyContent: 'center'}}>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp} style={{textAlign: 'center', display: 'flex', flexDirection:'column', margin: 15}}>
      <label style={{margin: 5, padding: 5}}>
          Name:
          <input style={{marginLeft: 5}} name="email" type="email" placeholder="Name" />
        </label>
        <label style={{margin: 5, padding: 5}}>
          Mobile No:
          <input style={{marginLeft: 5}} name="email" type="email" placeholder="Mobile No" />
        </label>
        <label style={{margin: 5, padding: 5}}>
          Email:
          <input style={{marginLeft: 5}} name="email" type="email" placeholder="Email" />
        </label>
        <label style={{margin: 5, padding: 5}}>
          Password:
          <input style={{marginLeft: 5}} name="password" type="password" placeholder="Password" />
        </label>
      </form>
      <button style={{border: "1px solid #D3D3D3", borderRadius: 3, padding: 5}} type="btn" onClick={firebase.doSignUp}>Sign Up</button>
      
    </div>
  );
};

export default withRouter(SignUp);