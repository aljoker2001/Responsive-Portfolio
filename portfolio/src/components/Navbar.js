import React, { useState } from 'react';

function Navbar() {
    const [active, setActive] = useState('')
    function snapTo(event) {
        event.preventDefault()
        console.log(event.target.innerText.toLowerCase())
        let location = event.target.innerText.toLowerCase()
        setActive(location);
        let final = document.getElementById(location)
        console.log(final)
        if (final !== '') {

            final.scrollIntoView({
                behavior: 'smooth'
            })
        } else {
            console.log(final)
        }
    }
    return (
        <nav className="sticky-top site-header navbar navbar-expand-lg navbar-dark col">
            <a class="navbar-brand" href="#">Alex McRandall</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="d-flex justify-content-end navbar-nav mr-auto">
                    <li className={active === 'about' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#" onClick={snapTo}>About</a>
                        {/* <span className="sr-only">(current)</span> */}
                    </li>
                    <li className={active === 'portfolio' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#" onClick={snapTo}>Portfolio</a>
                    </li>
                    <li className={active === 'contact' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#" onClick={snapTo}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;