import React from 'react';
import './header.css';

const Header = () => {
  const email = localStorage.getItem('email');
  return <nav className="navbar navbar-dark">
           <a className="navbar-brand" href="/">Flow App</a>
           {email && 
            <form className="form-inline">
              <ul className="navbar-nav mr-3 mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
              <button
                className="btn btn-outline-warning my-2 my-sm-0"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem('email');
                  window.location.replace('/');
                }}
              >
                Logout
              </button>
            </form>
          }
         </nav>;
}


export default Header;
