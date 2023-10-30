import React from 'react'
import userImg from "../assets/user1.png";
import Layout from './Layout';
import Section2 from './Section2';

function Section1() {
  return (
    <div>
      <Layout>
        {" "}
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
        <Section2/>
      </Layout>
    </div>
  );
}

export default Section1