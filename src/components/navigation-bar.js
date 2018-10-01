import React from 'react';
import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props) {
  const htmlLinks = props.links.map(link => {
    return <li><a href={link.href}>{link.text}</a></li>
  });

  return (
  <nav className="navigation-bar">
    <h1>{props.title}</h1>

    <ul className="navigation-bar-nav">
      {htmlLinks}
    </ul>
  </nav>
  );
}
