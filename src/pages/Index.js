import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// TODO: public/images/me.jpg Your image should be approximately 256 x 256 pixels.
// Larger and smaller is ok,
// but avoid very large images to save bandwidth. If you need help resizing your
// image, Adobe makes a great online tool here.
const Index = () => (
  <Main
    description={"Mitchell Hoesing's personal website. Penn. State Master's Student, "
    + 'Oregon State University Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          {/* <h2><Link to="/">About this site</Link></h2> */}
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>. You can also check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>

      <p> Original source for this website from Michael D&apos;Angelo available <a href="https://github.com/mldangelo/personal-site" target="_blank" rel="noreferrer">here</a>.</p>
    </article>
  </Main>
);

export default Index;
