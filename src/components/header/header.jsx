import React from 'react';
import './header.css';

const Header = () => {
  return <div className="header">
            <div>
              {/* <img src="#" className="logo" /> */}
              <span>FLOW APP</span>
            </div>
            <div>
               <button className="btn logout">Logout</button>  
            </div>
         </div>;
}

export default Header;