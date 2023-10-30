import React from 'react'

function Section6() {
  return (
    <div>
      {" "}
      <section className="flex section6" id="contact">
        <h1>Get in Touch</h1>
        <div className="flex icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-snapchat"></i>
        </div>
        <h2>OR</h2>
        <div className="flex email">
          <h3>Seebaw.m@gmail.com</h3>
          <a href="mailto:seebaw.m@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Section6