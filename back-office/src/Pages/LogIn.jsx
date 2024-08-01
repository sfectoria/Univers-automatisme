import React, { useState } from "react";
import "../App.css"; // Import your CSS file
import axios from "axios"; // Import axios
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

function App() {
  const dispatch = useDispatch();
  const { token, error, loading } = useSelector((state) => state.auth);

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState("");

  // const handleSignInClick = () => {
  //   setIsRightPanelActive(false);
  // };

  const handleSignInClickk = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setSignInError("Please fill in all fields before signing in.");
    } else {
      setSignInError("");
      try {
        // const response = await axios.post("http://localhost:4000/auth/login", {
        //   email,
        //   password
        // });
        // localStorage.setItem("token", JSON.stringify(response?.data));
        // window.location.reload();
        // console.log("Signed in successfully:", response.data);
        // Handle successful sign-in here (e.g., store token, redirect, etc.)
        await dispatch(login({ email, password }))
          .then((res) => {
            console.log("payload",res.payload);
            if (res.payload === "Invalid email" || res.payload === "Invalid password") {
              setSignInError(res.payload);
            }
          })
          .catch((err) => console.log(err, "this si the err from login jsx"));
      } catch (error) {
        console.log("error");
        setSignInError(error.response?.data?.message);
      }
    }
  };

  // const handleSignUpClickk = async (e) => {
  //   e.preventDefault();
  //   if (email.trim() === "" || password.trim() === "" || username.trim() === "") {
  //     setSignUpError("Please fill in all fields before signing up.");
  //   } else {
  //     setSignUpError("");
  //     try {
  //       const response = await axios.post("http://localhost:4000/users/signUp", {
  //         email,
  //         password,
  //         username,
  //       });
  //       console.log("Signed up successfully:", response.data);
  //       // Handle successful sign-up here (e.g., redirect to sign-in page)
  //     } catch (error) {
  //       setSignUpError(error.response?.data?.message || "Something went wrong!");
  //     }
  //   }
  // };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Caveat:wght@500&display=swap"
        rel="stylesheet"
      />
      <div>
        <div className="space"></div>
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* <div className="form-container sign-up-container">
            <form action="#">
              <h1 style={{ fontFamily: "Caveat, cursive" }}>Create Account</h1>
              <input
                type="text"
                placeholder="Name"
                style={{ marginBottom: "10px" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                style={{ marginBottom: "10px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={{ marginBottom: "10px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {signUpError && <p style={{ color: "red" }}>{signUpError}</p>}
              <button
                className="btn"
                onClick={handleSignUpClickk}
                style={{ background: "#B7D64C" }}
              >
                Sign Up
              </button>
            </form>
          </div> */}

          <div className="form-container sign-in-container">
            <form action="#">
              <h1 style={{ fontFamily: "Caveat, cursive" }}>Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                style={{ marginBottom: "10px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {signInError && <p style={{ color: "red" }}>{signInError}</p>}
              <a href="#">Forgot your password?</a>
              <button
                className="btn"
                onClick={handleSignInClickk}
                style={{ background: "#B7D64C" }}
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              {/* <div className="overlay-panel overlay-left">
                <h1 style={{ fontFamily: "Caveat, cursive" }}>Welcome Back!</h1>
                <p style={{ fontFamily: "Caveat, cursive" }}>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  onClick={handleSignInClick}
                  id="signIn"
                >
                  Sign In
                </button>
              </div> */}
              <div className="overlay-panel overlay-right">
                <h1 style={{ fontFamily: "Caveat, cursive" }}>
                  Hello, Friend!
                </h1>
                <p style={{ fontFamily: "Caveat, cursive" }}>
                  Enter your personal details and start journey with us
                </p>
                {/* <button
                  className="ghost"
                  onClick={handleSignUpClick}
                  id="signUp"
                >
                  Sign Up
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
