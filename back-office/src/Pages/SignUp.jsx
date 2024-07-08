import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png";
import back from "../assets/BACK.jpg";

function SignUp() {
  return (
    <MDBContainer fluid>
      <img className="p-5 bg-image" src={back} style={{ height: "300px" , width:"100%"}} />
      {/* <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "300px",
        }}
      ></div> */}

      <MDBCard
        className="mx-md-5 p-md-5 mb-5  shadow-5"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <img
            src={logo}
            alt="logo"
            style={{
              marginTop: "-60px",
              marginLeft: "16px",
              width: 200,
              height: 90,
            }}
          />
          <h2 className=" mb-5" style={{ fontFamily: 'Baskervville SC, serif' }}>Sign Up Now</h2>

          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="First name"
                id="form1"
                type="text"
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Last name"
                id="form1"
                type="text"
              />
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
          />

          <MDBBtn className="w-100 mb-4" size="md" style={{ backgroundColor: '#c3dc5d', color: 'white' }} >
            sign up
          </MDBBtn>
        </MDBCardBody>
        <footer style={{display:"flex", justifyContent:"center"}}>
          Existing users, Log In
          <a href="/">Here</a>
        </footer>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
