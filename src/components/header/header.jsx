import React from 'react';
import './header.css';

const Header = () => {
  const email = localStorage.getItem('email');
  return <nav className="navbar navbar-dark">
           <a className="navbar-brand" href="/">Flow App</a>
           {email && 
            <form className="form-inline">
              <button
                className="btn btn-outline-warning my-2 my-sm-0"
                onClick={(e) => {
                  e.preventDefault();
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
