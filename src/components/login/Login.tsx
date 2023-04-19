import { Container, Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
// import { setUserInfo, SET_USER_INFO } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Registration from "../registration/Registration";
import GoogleButton from "react-google-button";
import { User } from "../../redux/interfaces/user";
import { setCurrentUser } from "../../redux/actions";
import { redirect } from "react-router";

// import Example from "./SignInWithGoogle";

const Login = () => {
  let [userEmail, setUserEmail] = useState("");
  let [userPW, setUserPW] = useState("");

  const dispatch = useAppDispatch();

  const userLogin = async () => {
    const userCredentials = {
      email: userEmail,
      password: userPW,
    };
    try {
      let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/session`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const currentUser = await res.json();
        console.log("current user: ", currentUser);
        localStorage.setItem("accessToken", currentUser.accessToken);
        dispatch(setCurrentUser(currentUser.user)); //saves user as "currentUser" into the store. We dispatch ACTIONS.
      }
    } catch (error) {
      console.log(error);
    }
  };

  //local storage: localStorage.setItem("myCat", "Tom"); const cat = localStorage.getItem("myCat"); localStorage.removeItem("myCat");

  // const getUser = async () => {
  //   try {
  //     let response = await fetch(
  //       `${process.env.REACT_APP_BE}/users/${id}`
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //     } else {
  //       console.log("Error")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, [])

  return (
    <Container>
      <div className="green-div">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
          >
            <path
              fill="#00E676"
              d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
            ></path>
            <path
              fill="#FFF"
              d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
            ></path>
          </svg>
          Whatsapp Web
        </span>
      </div>
      <div className="main-div">
        <div className="login-info">
          <h2>Login to WhatsApp on your computer</h2>
          <Form
            className="form-text"
            onSubmit={(e) => {
              e.preventDefault();
              userLogin();
              // setUserEmail()
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userPW}
                onChange={(e) => setUserPW(e.target.value)}
              />
            </Form.Group>

            <div className="btn-wrapper">
              <Button className="login" onClick={userLogin} href="/main">
                Log In
              </Button>
              <a href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}>
                <GoogleButton
                  className="sign-in-w-google"
                  type="dark"
                  disabled={false}
                  // onClick={() => {Example()}}
                ></GoogleButton>
              </a>
              <a className="reg-to-wa" href="Registration">
                Register to WhatsApp
              </a>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
