import React from 'react';

function Navbar() {
    function snapTo(event) {
        event.preventDefault()
        console.log(event.target.innerText.toLowerCase())
        let location = event.target.innerText.toLowerCase()
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
        <nav className="sticky-top site-header navbar navbar-expand-lg navbar-light bg-light col">
            <a class="navbar-brand" href="#">Alex McRandall</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="d-flex justify-content-end navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={snapTo}>About</a>
                        {/* <span className="sr-only">(current)</span> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={snapTo}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={snapTo}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;