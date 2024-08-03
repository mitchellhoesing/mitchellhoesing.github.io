import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/unprofessionalHeadshot256.png`} alt="" />
      </Link>
      <header>
        <h2>Mitchell Hoesing</h2>
        <p><a href="mailto:hoesingmitch02@gmail.com">hoesingmitch02@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mitch. I am an alumnus of Oregon State University (OSU) and Penn State
        University (PSU), where I studied computer science, research, machine learning,
        and artificial
        intelligence. Previously, I was a research assistant at PSU. My research performs a
        longitudinal quantitative analysis of the CHI research conference data sources and
        methodologies using large language models. I also supported the PLAINTEXT Lab team members
        with their research through statistical work, programming, and writing. I have also worked
        at Intel as a quality analyst on the test automation team.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
