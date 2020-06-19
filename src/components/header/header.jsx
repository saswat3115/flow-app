import React, { useCallback } from 'react';
import './header.css';

const Header = () => {
  const logout = useCallback(() => {
    window.location.replace('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div className="header">
            <div>
              {/* <img src="#" className="logo" /> */}
              <span>FLOW APP</span>
            </div>
            <div>
               <button className="btn logout" onClick={() => logout()}>Logout</button>  
            </div>
         </div>;
}

export default Header;