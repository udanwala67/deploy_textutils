import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/About">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <div className="d-flex"></div>
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}
       style ={{height : '25px' , width : '25px' , cursor: 'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}}
       style ={{height : '25px' , width : '25px' , cursor: 'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}}
       style ={{height : '25px' , width : '25px' , cursor: 'pointer'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}
       style ={{height : '25px' , width : '25px' , cursor: 'pointer'}}></div>
       <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}}
       style ={{height : '25px' , width : '25px' , cursor: 'pointer'}}></div>
       <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}}
       style ={{height : '25px' , width : '25px' , cursor: 'pointer'}}></div> */}




      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} px-2`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="button" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      
    </div>
  </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title : 'TextUtils(sahil)' , 
    aboutText : 'About' ,
  }
