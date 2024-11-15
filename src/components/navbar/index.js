import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbarbg fixed-top col-12">
            <h1 className="portfoliotxt">Portfolio</h1>
            <button className="navbar-toggler bar" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars barbtn"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item">
                        <Link className="navbuttons" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbuttons" to="/about">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbuttons" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbuttons" to="/certificates">Certificates</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbuttons" to="/projects">Projects</Link>
                    </li>
                </ul>
                <div className="btncon text-center">
                    <button className="contactbtn ml-auto mr-auto">Contact Me</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
