import React from 'react';

const Login = () => {
    return <div className="login">
        <div className="login-section">
            <div>
                Login
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button className="btn btn-login">Login</button>
        </div>
    </div>;
}

export default Login;