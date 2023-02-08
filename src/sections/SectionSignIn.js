import React from "react";
import "./SectionSignIn.css";
import SignInForm from "../components/SignInForm";

const SectionSignIn = () => {
  return (
    <section id="sectionSignIn">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-8 heroContainer order-2 order-lg-1"></div>
          <div className="col-lg-4 signInContainer order-1 order-lg-2">
            <div className="logoBox"></div>
            <h2 className="signInTitle">Welcome, Admin BCR</h2>
            <SignInForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSignIn;
