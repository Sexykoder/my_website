import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <p>Hello Everyone!</p>
        <p>I am Brijamohan Jha!</p>
        <h1>Welcome To My Website</h1>
        <div className="logos">
          <a href="https://www.instagram.com" target= "blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target= "blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.github.com" target= "blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="github" />
          </a>
          <a href="https://www.twitter.com" target= "blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
