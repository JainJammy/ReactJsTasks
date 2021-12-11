import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from"react"
export const Navbar = () => {
const[input,setinput]=useState("");    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="#" id="navtext">Movie Db</Link>
      <div className="collapse navbar-collapse" id="navbarposition">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">  
      <li className="nav-item active">
      <Link className="nav-link" to="/Popular">Popular </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" href="#">Upcoming</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" href="#">Top</Link>
      </li>
      </ul> 
      
      <form className="d-flex">
      <input className="form-control me-2" type="search" id="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" id="searchposition">Search</button>
       </form>
      </div>
     </nav>
 
    )
}
export default Navbar;