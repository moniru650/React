import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './HeaderStyle.css'

export default function Header(){
  return (

  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Webskitter Academy</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link to="/Card">
      <a className="nav-link" href="#">Home</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/Service">
      <a className="nav-link" href="#">About</a>
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/Card">
      <a className="nav-link" href="#">Blog</a>
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/Card">
      <a className="nav-link" href="#">Service</a>
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/Card">
      <a className="nav-link" href="#">Contact</a>
      </Link>
      </li>
    </ul>
  </div>
</nav>
      </>
   
  )
}
