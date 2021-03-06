import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CRM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/cart">About</Link>
                    </li>
                </ul>
                <Link className='btn btn-outline-light mx-5' to='/addUser'>Add New User</Link>
                </div>
            </div>
            </nav>
        </div>
    )
}
