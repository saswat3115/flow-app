import React, { useCallback } from 'react';
import './header.css';

const Header = () => {
  const logout = useCallback(() => {
    window.location.replace('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <nav className="navbar navbar-dark">
           <a className="navbar-brand" href="/">Flow App</a>
           <form className="form-inline">
            <button className="btn btn-outline-warning my-2 my-sm-0" onClick={logout}>Logout</button>
           </form>
         </nav>;
}

export default Header;
