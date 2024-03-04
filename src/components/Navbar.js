// Navbar.js

import React from 'react';

const Navbar = ({ links }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#">My Website</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {links.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link text-white" href="#">{link}</a>
                        </li>
                    ))}
                </ul>
                <form className="form-inline my-2 my-lg-0"> {/*content is defined as being displayed inline with some vertical space around it on small screens*/}
                    <input className="form-control" type="search" placeholder="Search" /> type="search" placeholder="Search"/> {/*placeholder provides text in the search bar */}
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> {/*outline-success makes the button green, my-2 my-sm-0 gives y-axis margins, and submit defines it as a submission button*/}
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
