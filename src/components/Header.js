import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className="primary-header">
        <div className="flex logo">
          <div>
            <h1>
              <Link to={"/"}>Shiva</Link>
            </h1>
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
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
