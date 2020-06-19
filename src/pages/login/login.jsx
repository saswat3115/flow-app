import React, { useCallback } from 'react';

const Login = ({ history }) => {

  const login = useCallback(() => {
    history.push('/home');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <button className="btn btn-login" onClick={() => login()}>Login</button>
      </div>
  </div>;
}

export default Login;