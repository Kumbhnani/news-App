import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

const Navbar = () =>{
 
    return (
      <div className='overflow-auto over fixed-top'>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
        <Link className="navbar-brand" to="/entertainment"><img src="https://cdn-icons-png.flaticon.com/128/4520/4520862.png" alt="" style={{width: '40px', backgroundColor : '#fff'}}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Sciences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">About us</Link>
            </li> */}
          </ul>
        </div>
      </div>
        {/* <div class="form-inline d-flex mx-1">
          <input class="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div> */}
</nav>
      </div>
    )
  }

export default Navbar
