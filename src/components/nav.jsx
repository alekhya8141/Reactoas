import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <NavLink className="navbar-brand" to="/">Online Admission System</NavLink>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" 
                 aria-controls="navbarSupportedContent" 
                 aria-expanded="false" 
                 aria-label="Toggle navigation">
                    
                </button>
                <div className="collapse navbar-collapse" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/about">About</NavLink>
                    </li>
                   
                    <li class="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/university">University</NavLink>
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar