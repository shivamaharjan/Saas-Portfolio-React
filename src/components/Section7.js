import React from 'react'

function Section7() {
  return (
    <div>
      {" "}
      <section className="section7">
        <div className="flex heading">
          <div className="flex head">
            <h1>Links</h1>
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#skills">
              <p>Skills</p>
            </a>
            <a href="#project">
              <p>Projects</p>
            </a>
            <a href="#contact">
              <p>Contacts</p>
            </a>
          </div>

          <div className="flex head">
            <h1>Social Links</h1>
            <a href="https://www.linkedin.com/feed/">
              <p>LinkedIn</p>
            </a>
            <a href="https:www.facebook.com">
              <p>Facebook</p>
            </a>
            <a href="https://github.com/">
              <p>gitHub</p>
            </a>
            <a href="https://youtube.com">
              <p>Youtube</p>
            </a>
          </div>
        </div>

        <p className="foot flex">
          ©Copyrights || All rights reserved || Made by me
        </p>
      </section>
    </div>
  );
}

export default Section7