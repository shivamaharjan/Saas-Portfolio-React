import React from "react";

import userImg from "./assets/user1.png";

import "./style.scss";

function App() {
  return (
    <div className="App">
      {" "}
      <input type="checkbox" id="darkmode" />
      <label htmlFor="darkmode">
        <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
      </label>
      <div className="wrapper">
        <header className="primary-header">
          <div className="flex logo">
            <div>
              <a href="#hero">
                <h1>Shiva</h1>
              </a>
            </div>

            <div className="line"></div>

            <div>
              <h1>Soft.</h1>
              <h1>Engineer</h1>
            </div>
          </div>

          <div className="right">
            <ul className="flex navigation">
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        <section className="section1" id="hero">
          <div className="hero flex">
            <div className="left flex">
              <div className="name">Hi, I am Shiva Maharjan</div>
              <div className="tag">Software Engineer</div>
              <div className="sub-tag">I love Coding and Learning</div>
              <button>
                <a href={userImg} download>
                  Download CV <i className="fa-solid fa-download"></i>
                </a>
              </button>
            </div>

            <div className="flex right">
              <img src={userImg} alt="" />
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="info-container">
            <div className="info-lists">
              <div className="flex info-content">
                <div className="icon-container">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>IT</h5>
                  <p>Graduate</p>
                </span>
              </div>
              <div className="info-divider"></div>
              <div className="flex info-content">
                <div className="icon-container">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>IT</h5>
                  <p>Graduate</p>
                </span>
              </div>
              <div className="info-divider"></div>
              <div className="flex info-content">
                <div className="icon-container">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>IT</h5>
                  <p>Graduate</p>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex section3" id="skills">
          <div className="skills">
            <div className="html1">
              <i className="fa-brands fa-html5"></i>
            </div>

            <h5>HTML</h5>
          </div>

          <div className="skills">
            <div className="html1">
              <i className="fa-brands fa-css3-alt"></i>
            </div>

            <h5>CSS</h5>
          </div>

          <div className="skills">
            <div className="html1">
              <i className="fa-brands fa-html5"></i>
            </div>
            <h5>HTML</h5>
          </div>

          <div className="skills">
            <div className="html1">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
            <h5>CSS</h5>
          </div>
        </section>

        <section className="section4 flex" id="projects">
          <h5>My Recent Projects</h5>

          <div className="row1 flex">
            <div className="project1">
              <div className="img1">
                <img src={userImg} alt="" />
              </div>
              <div className="icons1">
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <div className="react">Portfolio with React</div>
              <div className="date">22 April 2023</div>
            </div>

            <div className="project1">
              <div className="img1">
                <img src={userImg} alt="" />
              </div>
              <div className="icons1">
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <div className="react">Portfolio with React</div>
              <div className="date">22 April 2023</div>
            </div>

            <div className="project1">
              <div className="img1">
                <img src={userImg} alt="" />
              </div>
              <div className="icons1">
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <div className="react">Portfolio with React</div>
              <div className="date">22 April 2023</div>
            </div>

            <div className="project1">
              <div className="img1">
                <img src={userImg} alt="" />
              </div>
              <div className="icons1">
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <div className="react">Portfolio with React</div>
              <div className="date">22 April 2023</div>
            </div>

            <div className="project1">
              <div className="img1">
                <img src={userImg} alt="" />
              </div>
              <div className="icons1">
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <div className="react">Portfolio with React</div>
              <div className="date">22 April 2023</div>
            </div>

            <div className="project1">
              <div className="img1">
                <img src={userImg} alt="" />
              </div>
              <div className="icons1">
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <div className="react">Portfolio with React</div>
              <div className="date">22 April 2023</div>
            </div>
          </div>
        </section>

        <section className="section5" id="about">
          <h1>About me</h1>
          <div className="flex aboutme">
            <img src={userImg} width="100%" alt="aboutme" />
            <div className="flex description">
              <h4>Shiva Maharjan</h4>
              <p>
                Hi! I am..... aLorem, ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus iure neque sit dolore laudantium
                nemo.
              </p>
              <h5>Interests</h5>
              <div className="flex interest">
                <ul>
                  <li>Coding</li>
                  <li>Soccer</li>
                  <li>Movies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
      </div>{" "}
    </div>
  );
}

export default App;
