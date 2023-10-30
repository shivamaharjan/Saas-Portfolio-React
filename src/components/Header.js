import React from 'react'

export default function Header() {
  return (
    <div>
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
    </div>
  );
}
