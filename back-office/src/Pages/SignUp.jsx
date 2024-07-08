import React from 'react';
import '../App.css'; // Assurez-vous que votre fichier CSS est correctement importé
// import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
import logo from "../assets/logo.png";

function SignUp() {
  return (
    <div>
      <div className="circle"></div>
      <div className="card">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <h2>Create Account</h2>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <footer>
          Existing users, Log In
          <a href="/">Here</a>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
