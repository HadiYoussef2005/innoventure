import React from 'react';
import './header.css'

export default function Header() {
  return (
    <>
        <nav className="navbar">
            <ul className="navlist">
                <li className="navitem">Home</li>
                <li className="navitem">About Us</li>
                <li className="navitem">Contact Us</li>
            </ul>
        </nav>
    </>
  );
}
