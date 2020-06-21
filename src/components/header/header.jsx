import React from 'react';
import './header.css';
import { connect } from 'react-redux';

const Header = ({ email }) => {
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

const mapStateToProps = (state) => ({
  email: state.auth.email
});

export default connect(mapStateToProps)(Header);
