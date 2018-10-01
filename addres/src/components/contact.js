import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  // const contactCard =
  return (
    <li key={props.index} className="contact">
      <img src={props.photo} className="contact-photo" />
      <span className="contact-name">{props.name}</span>
      <span className="contact-address">{props.address}</span>
    </li>
  );
}
