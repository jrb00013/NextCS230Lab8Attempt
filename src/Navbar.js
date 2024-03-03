
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 ms-auto"> {/* Using ms-auto to push the search bar to the right */}
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success my-2 my-sm-0 ms-auto" type="submit">Search</button>
                    </form>


                </div>
            </div>
        </nav>
    );
};


export default Navbar;
