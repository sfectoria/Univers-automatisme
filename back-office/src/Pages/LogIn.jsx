import React, { useState } from "react";
import "../App.css"; // Import your CSS file

function App() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };
  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignInClickk = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields before signing in.");
      return;
    }
  };

  const handleSignUpClickk = () => {
    if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
      alert("Please fill in all fields before signing up.");
      return;
    }
  };

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
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <h1 style={{ fontFamily: "Caveat, cursive" }}>Create Account</h1>
              <input
                type="text"
                placeholder="Name"
                style={{ marginBottom: "10px" }}
              />
              <input
                type="email"
                placeholder="Email"
                style={{ marginBottom: "10px" }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{ marginBottom: "10px" }}
              />
              <button
                className="btn"
                onClick={handleSignUpClickk}
                style={{ background: "#B7D64C" }}
              >
                Sign Up
              </button>
            </form>
          </div>

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
              <div className="overlay-panel overlay-left">
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
              </div>
              <div className="overlay-panel overlay-right">
                <h1 style={{ fontFamily: "Caveat, cursive" }}>
                  Hello, Friend!
                </h1>
                <p style={{ fontFamily: "Caveat, cursive" }}>
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost"
                  onClick={handleSignUpClick}
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
