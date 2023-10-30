import React from 'react'
import userImg from "../assets/user1.png";
import Layout from './Layout';
import Section6 from './Section6';

function Section5() {
  return (
    <div>
      <Layout>
        {" "}
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
        <Section6/>
      </Layout>
    </div>
  );
}

export default Section5